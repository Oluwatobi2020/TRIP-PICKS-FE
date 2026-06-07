import React from "react";
import {
  Stack,
  FormHelperText,
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { type SxProps, type Theme } from "@mui/system";
import { type FormikProps, getIn } from "formik";

interface ControlledCheckBoxProps {
  formik: FormikProps<any>;
  name: string;
  label: React.ReactNode;
  sx?: SxProps<Theme>;
  disableOnChange?: boolean;
  color?: string;
  bg?: string;
  value?: boolean;
}

const ControlledCheckBox: React.FC<ControlledCheckBoxProps> = ({
  formik,
  sx,
  disableOnChange = false,
  label,
  name,
  color,
  bg,
  value,
  ...props
}) => {
  const fieldValue = getIn(formik.values, name) as boolean;
  const fieldError = getIn(formik.errors, name) as string | undefined;
  const fieldTouched = getIn(formik.touched, name) as boolean | undefined;

  return (
    <Stack
      sx={{
        m: 0.3,
        minWidth: 230,
        width: "100%",
        justifyContent: "center",
        ...sx,
      }}
      spacing={0.3}
    >
      <FormControl
        required
        error={Boolean(fieldTouched && fieldError)}
        variant="standard"
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={value ?? fieldValue ?? false}
              onChange={!disableOnChange ? formik.handleChange : undefined}
              name={name}
              id={name}
              size="small"
              {...props}
              sx={{
                color: "secondary.main", // unchecked icon color
                "&.Mui-checked": {
                  color: "secondary.main", // checked (checkmark) color
                },
              }}
            />
          }
          label={
            <Typography
              sx={{
                fontSize: "0.85rem",
                fontWeight: 500,
                color: color || "inherit",
                backgroundColor: bg || "transparent",
                px: 0.5,
                borderRadius: "4px",
              }}
            >
              {label}
            </Typography>
          }
          labelPlacement="end"
        />

        <FormHelperText sx={{ marginLeft: "1.2rem" }}>
          {fieldTouched && fieldError ? fieldError : ""}
        </FormHelperText>
      </FormControl>
    </Stack>
  );
};

export default ControlledCheckBox;
