import React from "react";
import { TextField, Stack, Typography } from "@mui/material";
import { get } from "lodash-es";
import type { FormikProps } from "formik";
import type { SxProps, Theme } from "@mui/material/styles";
import type { TextFieldProps } from "@mui/material";

type ControlledTextFieldProps = {
  formik: FormikProps<any>; // Replace `any` with your actual form values type
  name: string;
  label: string;
  type?: string;
  disableOnChange?: boolean;
  inFieldLabel?: boolean;
  sx?: SxProps<Theme>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  InputProps?: TextFieldProps["InputProps"];
  onFileChange?: () => void;
  value?: unknown;
} & Omit<TextFieldProps, "name" | "value" | "onChange" | "error" | "helperText" | "inputProps" | "InputProps">;

const ControlledTextField: React.FC<ControlledTextFieldProps> = ({
  formik,
  sx,
  InputProps,
  disableOnChange,
  label,
  name,
  type = "text",
  inFieldLabel,
  onFileChange,
  inputProps,
  value,
  ...props
}) => {
  const fieldTouched = get(formik.touched, name);
  const fieldError = get(formik.errors, name);
  const showError = fieldTouched && typeof fieldError === "string";

  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "center",
        minWidth: 150,
        m: 1,
        ...sx,
      }}
      spacing={0.5}
    >
      {!inFieldLabel && (
        <Typography
          fontWeight={500}
          fontSize={"0.85rem"}
          sx={{
            width: "50%",
            textAlign: { lg: "right", md: "right", sm: "right", xs: "right" },
            marginRight: "0.7rem",
          }}
        >
          {label}
        </Typography>
      )}
      <TextField
        sx={{ minWidth: "250px" }}
        id={name}
        name={name}
        size="small"
        variant="outlined"
        label={inFieldLabel ? label : undefined}
        type={type}
        value={value ?? get(formik.values, name)}
        onChange={disableOnChange ? undefined : formik.handleChange}
        error={Boolean(showError)}
        helperText={showError ? fieldError : " "}
        InputProps={InputProps}
        inputProps={inputProps}
        {...props}
      />
    </Stack>
  );
};

export default ControlledTextField;
