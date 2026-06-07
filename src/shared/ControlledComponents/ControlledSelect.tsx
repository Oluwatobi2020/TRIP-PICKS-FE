import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Stack,
  Typography,
  OutlinedInput,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { get } from "lodash-es";
import type { SxProps, Theme } from "@mui/material/styles";
import type { FormikProps } from "formik";

interface Option {
  label: string;
  value: string | number;
}

interface ControlledSelectProps {
  formik: FormikProps<any>; // Replace `any` with your form values type
  name: string;
  label: string;
  borderVal?: string;
  borderRadiusVal?: string;
  options: Option[];
  disableOnChange?: boolean;
  inFieldLabel?: boolean;
  sx?: SxProps<Theme>;
  value?: string | number;
}

const ControlledSelect: React.FC<ControlledSelectProps> = ({
  formik,
  sx,
  label,
  name,
  disableOnChange,
  options,
  inFieldLabel,
  value,
  borderVal = "1px solid #D0D5DD",
  borderRadiusVal,
  ...props
}) => {
  const showError =
    get(formik.touched, name) && Boolean(get(formik.errors, name));
  const errorText: any =
    get(formik.touched, name) && typeof get(formik.errors, name) === "string"
      ? get(formik.errors, name)
      : " ";

  return (
    <Stack
      sx={{
        justifyContent: "center",
        width: "100%", // Fixed from "100"
        ...sx,
      }}
      // spacing={0.5}
    >
      {!inFieldLabel && (
        <Typography fontWeight={500} fontSize={"0.85rem"}>
          {label}
        </Typography>
      )}

      <FormControl
        sx={{ width: "100%" }}
        variant="outlined"
        fullWidth
        error={showError}
        {...props}
      >
        {inFieldLabel && (
          <Typography fontWeight={500} fontSize={"0.85rem"}>
            {label}
          </Typography>
        )}

        <Select
          name={name}
          id={name}
          size="small"
          value={value ?? get(formik.values, name)}
          onChange={
            !disableOnChange
              ? (e: SelectChangeEvent) => formik.handleChange(e)
              : undefined
          }
          input={
            <OutlinedInput
              sx={{
                borderRadius: borderRadiusVal ?? "8px",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: borderVal,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: borderVal,
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: borderVal,
                },
                "&.Mui-error .MuiOutlinedInput-notchedOutline": {
                  border: borderVal,
                },
              }}
            />
          }
        >
          {options.map(({ value, label }) => (
            <MenuItem value={value} key={value}>
              {label}
            </MenuItem>
          ))}
        </Select>

        <FormHelperText>{errorText}</FormHelperText>
      </FormControl>
    </Stack>
  );
};

export default ControlledSelect;
