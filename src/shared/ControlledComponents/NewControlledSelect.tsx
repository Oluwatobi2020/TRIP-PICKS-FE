import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
  Box,
} from "@mui/material";
import { get } from "lodash-es";
import type { FormikProps } from "formik";
import type { Theme, SxProps } from "@mui/material/styles";

interface Option {
  label: string;
  value: string | number;
}

interface NewControlledSelectProps {
  formik: FormikProps<any>; // You can replace 'any' with your form type
  name: string;
  label: string;
  options: Option[];
  disableOnChange?: boolean;
  inFieldLabel?: boolean;
  sx?: SxProps<Theme>;
  value?: string | number;
}

/**
 * Type-safe select component integrated with Formik and MUI
 */
const NewControlledSelect: React.FC<NewControlledSelectProps> = ({
  formik,
  sx,
  label,
  name,
  disableOnChange,
  options,
  inFieldLabel,
  value,
  ...props
}) => {
  const touched = get(formik.touched, name);
  const error = get(formik.errors, name);
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
          {label}
        </Typography>
      )}
      <FormControl
        variant="outlined"
        fullWidth
        error={Boolean(showError)}
        {...props}
      >
        <Select
          name={name}
          id={name}
          size="small"
          value={value ?? get(formik.values, name)}
          onChange={!disableOnChange ? formik.handleChange : undefined}
        >
          {options?.map(({ value, label }) => (
            <MenuItem value={value} key={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{showError ? error : " "}</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default NewControlledSelect;
