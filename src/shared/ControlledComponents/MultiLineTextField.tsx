import React from "react";
import {
  TextField,
  Stack,
  Typography,
  InputAdornment,
  CircularProgress,
  FormHelperText,
  type TextFieldProps,
} from "@mui/material";
import { get } from "lodash-es";

interface MultiLineTextFieldProps extends Omit<
  TextFieldProps,
  "name" | "onChange"
> {
  loading?: boolean;
  formik: any; // Optional: can be replaced with FormikProps<T>
  disableOnChange?: boolean;
  label?: string;
  name: string;
  inFieldLabel?: boolean;
  numberOfRows?: number;
  onFileSelect?: (files: FileList | null) => void;
  prioritizeError?: string | boolean;
  required?: boolean; // <-- NEW
}

const MultiLineTextField: React.FC<MultiLineTextFieldProps> = ({
  loading,
  formik,
  sx,
  disableOnChange,
  label,
  name,
  type = "text",
  inFieldLabel,
  slotProps,
  onFileSelect,
  prioritizeError,
  placeholder,
  required,
  numberOfRows,
  ...props
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disableOnChange) return;

    if (type === "file" && onFileSelect) {
      onFileSelect(e.target.files);
    }

    formik.handleChange(e);
  };

  const showError =
    prioritizeError ||
    (get(formik.touched, name) && Boolean(get(formik.errors, name)));

  const errorMessage =
    prioritizeError ||
    (get(formik.touched, name) && get(formik.errors, name)) ||
    " ";

  return (
    <Stack
      sx={{
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
        ...sx,
      }}
    >
      {/* LABEL */}
      {!inFieldLabel && label && (
        <Typography sx={{ fontWeight: 500, fontSize: "12px", mb: 0.5 }}>
          {label}
          {required && <span>* </span>}
        </Typography>
      )}

      {/* MULTILINE FIELD */}
      <TextField
        fullWidth
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        multiline
        rows={numberOfRows}
        variant="outlined"
        type={type}
        value={props.value ?? get(formik.values, name)}
        onChange={onChange}
        error={Boolean(showError)}
        label={
          inFieldLabel && label ? `${required ? "* " : ""}${label}` : undefined
        }
        slotProps={{
                    ...slotProps,
                    htmlInput: {
                      ...slotProps?.htmlInput,
                    },

                  }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            fontSize: "0.75rem",

            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D0D5DD",
            },

            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#98A2B3",
            },

            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#1976d2",
              borderWidth: "1px",
            },
          },
        }}
        {...props}
      />

      {/* ERROR TEXT */}
      <FormHelperText sx={{ color: "red" }}>{errorMessage}</FormHelperText>
    </Stack>
  );
};

export default MultiLineTextField;
