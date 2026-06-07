import React from "react";
import {
  Stack,
  Typography,
  OutlinedInput,
  type OutlinedInputProps,
  FormHelperText,
} from "@mui/material";
import { get } from "lodash-es";
import { type FormikProps } from "formik";

export interface ControlledPasswordFieldProps extends Omit<
  OutlinedInputProps,
  "name" | "onChange"
> {
  name: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  loading?: boolean;

  formik: FormikProps<any>;
  borderRadiusVal?: string;

  sx?: object;
  InputProps?: OutlinedInputProps;
  disableOnChange?: boolean;
  endAdornment?: React.ReactNode;
  inFieldLabel?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  onFileChange?: (files: FileList | null) => void;
  prioritizeError?: boolean | string;
}

const ControlledPasswordField: React.FC<ControlledPasswordFieldProps> = ({
  loading,
  formik,
  sx,
  InputProps,
  disableOnChange,
  endAdornment,
  label,
  name,
  type = "text",
  inFieldLabel,
  inputProps,
  onFileChange,
  prioritizeError,
  value,
  borderRadiusVal = "10px",
  ...props
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = e.currentTarget.files;
    onFileChange?.(files);
    formik.handleChange(e);
  };

  const error =
    prioritizeError ||
    (get(formik.touched, name) && Boolean(get(formik.errors, name)));

  const errorMessage =
    prioritizeError ||
    (get(formik.touched, name) && get(formik.errors, name)) ||
    " ";

  const displayErrorMessage =
    typeof errorMessage === "string" ? errorMessage : " ";

  return (
    <Stack
      sx={{
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
        ...sx,
      }}
    >
      {!inFieldLabel && label && (
        <Typography fontWeight={500} fontSize="0.85rem">
          {label}
        </Typography>
      )}

      <OutlinedInput
        {...InputProps}
        {...props}
        fullWidth={false}
        id={name}
        name={name}
        size="small"
        autoComplete="off"
        label={inFieldLabel ? label : undefined}
        type={type}
        value={value ?? get(formik.values, name)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (disableOnChange) return;

          if (type === "file") {
            handleFileChange(e);
          } else {
            formik.handleChange(e);
          }
        }}
        error={Boolean(error)}
        inputProps={inputProps}
        endAdornment={endAdornment}
        disabled={loading}
        sx={{
          height: 40,
          borderRadius: borderRadiusVal,
          fontSize: "0.75em",

          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: borderRadiusVal,
            borderColor: "#D0D5DD",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#98A2B3",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1976d2",
            borderWidth: "1px",
          },

          "& .MuiOutlinedInput-input": {
            padding: "12px 14px",
          },
        }}
      />
      <FormHelperText sx={{ color: "red" }}>
        {displayErrorMessage}
      </FormHelperText>
    </Stack>
  );
};

export default ControlledPasswordField;
