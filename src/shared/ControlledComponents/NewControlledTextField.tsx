import React from "react";
import { TextField, Typography, Box } from "@mui/material";
import type { TextFieldProps, SxProps } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import type { FormikProps } from "formik";

interface NewControlledTextFieldProps
  extends Omit<TextFieldProps, "name" | "value" | "onChange"> {
  formik: FormikProps<any>; // Replace `any` with your specific form values type if available
  name: string;
  label: string;
  type?: string;
  disableOnChange?: boolean;
  inFieldLabel?: boolean;
  sx?: SxProps<Theme>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  onFileChange?: () => void;
}

const NewControlledTextField: React.FC<NewControlledTextFieldProps> = ({
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
  ...props
}) => {
  const touched = formik.touched[name];
  const error = formik.errors[name];
  const showError = touched && typeof error === "string";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        ...sx,
      }}
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
          {label}:
        </Typography>
      )}
      <TextField
        fullWidth
        id={name}
        name={name}
        size="small"
        variant="outlined"
        label={inFieldLabel ? label : undefined}
        type={type}
        value={formik.values[name]}
        onChange={disableOnChange ? undefined : formik.handleChange}
        error={Boolean(showError)}
        InputProps={InputProps}
        helperText={showError ? error : " "}
        inputProps={inputProps}
        {...props}
      />
    </Box>
  );
};

export default NewControlledTextField;
