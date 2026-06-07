"use client";
import React from "react";
import {
  TextField,
  Stack,
  Typography,
  InputAdornment,
  CircularProgress,
  FormHelperText,
  type TextFieldProps,
  type SxProps,
  type Theme,
  type InputBaseComponentProps,
  type InputProps as MuiInputProps,
} from "@mui/material";
import { MuiTelInput, type MuiTelInputProps } from "mui-tel-input";

import { get } from "lodash-es";

interface ControlledTextFieldProps extends Omit<
  TextFieldProps,
  "name" | "onChange"
> {
  loading?: boolean;
  formik: any;
  disableOnChange?: boolean;
  label?: string;
  name: string;
  borderRadiusVal?: string;
  bgColoor?: string;
  borderVal?: string;
  paddingVal?: string;
  fieldLabel?: string;
  inFieldLabel?: boolean;
  onFileSelect?: (files: FileList | null) => void;
  prioritizeError?: boolean | string;
  required?: boolean;
  sx?: SxProps<Theme>;
  inputProps?: InputBaseComponentProps;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;

  InputProps?: Partial<MuiInputProps>;

  isPhone?: boolean;
  defaultCountry?: MuiTelInputProps["defaultCountry"];
}

const ControlledTextField: React.FC<ControlledTextFieldProps> = ({
  loading,
  formik,
  sx,
  disableOnChange,
  label,
  name,
  size = "small",
  type = "text",
  inFieldLabel,
  onFileSelect,
  prioritizeError,
  required,
  borderRadiusVal = "8px",
  paddingVal = "8px",
  borderVal = "1px solid #D0D5DD",
  bgColoor = "#FFFFFF",
  isPhone = false,
  defaultCountry = "NG",
  fieldLabel = "12px",
  inputProps,
  InputProps,
  slotProps,
  startAdornment,
  endAdornment,
  ...props
}) => {
  const error =
    prioritizeError ||
    (get(formik.touched, name) && Boolean(get(formik.errors, name)));

  const errorMessage =
    prioritizeError ||
    (get(formik.touched, name) && get(formik.errors, name)) ||
    " ";

  return (
    <Stack sx={{ width: "100%", ...sx }}>
      {!inFieldLabel && label && (
        <Typography sx={{ fontWeight: 500, fontSize: fieldLabel }}>
          {label}
          {required && <span>*</span>}
        </Typography>
      )}

      {isPhone ? (
        <MuiTelInput
          defaultCountry={defaultCountry}
          value={get(formik.values, name)}
          onChange={(value) => formik.setFieldValue(name, value)}
          onBlur={() => formik.setFieldTouched(name, true)}
          size={size}
          fullWidth
          error={Boolean(error)}
          sx={{
            "& .MuiOutlinedInput-root": {
              minHeight: "40px",
              borderRadius: borderRadiusVal,
              backgroundColor: bgColoor,
              "& fieldset": { border: borderVal },
              "&:hover fieldset": { border: borderVal },
              "&.Mui-focused fieldset": { border: borderVal },
            },
            "& input": {
              fontSize: "0.75rem",
              padding: "8px",
            },
          }}
        />
      ) : (
        <TextField
          id={name}
          name={name}
          size={size}
          fullWidth
          autoComplete="off"
          variant="outlined"
          type={type}
          label={inFieldLabel ? (required ? `* ${label}` : label) : undefined}
          value={props.value ?? get(formik.values, name)}
          onChange={(e) => {
            if (disableOnChange) return;
            if (type === "file" && onFileSelect) {
              onFileSelect((e.target as HTMLInputElement)?.files ?? null);
            }
            formik.handleChange(e);
          }}
          error={Boolean(error)}
          slotProps={{
            ...slotProps,
            htmlInput: {
              ...slotProps?.htmlInput,
            },
            input: {
              startAdornment: startAdornment ? (
                <InputAdornment position="start">
                  {startAdornment}
                </InputAdornment>
              ) : undefined,

              endAdornment: loading ? (
                <InputAdornment position="end">
                  <CircularProgress size={20} />
                </InputAdornment>
              ) : endAdornment ? (
                <InputAdornment position="end">{endAdornment}</InputAdornment>
              ) : undefined,
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              minHeight: "36px",
              borderRadius: borderRadiusVal,
              backgroundColor: bgColoor,
              "& fieldset": { border: borderVal },
              "&:hover fieldset": { border: borderVal },
              "&.Mui-focused fieldset": { border: borderVal },
            },
            "& .MuiInputBase-input": {
              fontSize: "0.75rem",
              padding: paddingVal,
            },
            "& .MuiInputAdornment-positionStart": {
              marginRight: "-3px",
              marginLeft: "-3px",
            },
          }}
          {...props}
        />
      )}

      <FormHelperText sx={{ color: "red" }}>{errorMessage}</FormHelperText>
    </Stack>
  );
};

export default ControlledTextField;
