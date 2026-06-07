import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Stack,
  Typography,
  OutlinedInput,
  Box,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { get } from "lodash-es";
import type { SxProps, Theme } from "@mui/material/styles";
import type { FormikProps } from "formik";

interface Option {
  label: string;
  value: string | number;
}

interface ControlledSelectPillProps {
  formik: FormikProps<any>;
  name: string;
  label?: string;
  options: Option[];
  disableOnChange?: boolean;
  inFieldLabel?: boolean;
  sx?: SxProps<Theme>;
  value?: string | number;
  borderRadiusVal?: string;
  borderVal?: string;
  boxShadow?: string;
}

const ControlledSelectPill: React.FC<ControlledSelectPillProps> = ({
  formik,
  sx,
  label,
  name,
  disableOnChange,
  options,
  inFieldLabel = true,
  value,
  borderRadiusVal,
  borderVal = "1px solid #E1E4EA",
  boxShadow = "0px 10px 15px -3px rgba(0,0,0,0.1)",
}) => {
  const showError =
    get(formik.touched, name) && Boolean(get(formik.errors, name));

  const errorText =
    showError && typeof get(formik.errors, name) === "string"
      ? (get(formik.errors, name) as string)
      : undefined;

  const selectedValue = value ?? get(formik.values, name);

  const selectedLabel =
    options.find((opt) => opt.value === selectedValue)?.label ?? "";

  return (
    <Stack spacing={0.5} sx={{ width: "100%", ...sx }}>
      {!inFieldLabel && (
        <Typography fontWeight={500} fontSize="0.85rem">
          {label}
        </Typography>
      )}

      <FormControl fullWidth error={showError}>
        <Select
          name={name}
          value={selectedValue}
          onChange={
            !disableOnChange
              ? (e: SelectChangeEvent) => formik.handleChange(e)
              : undefined
          }
          displayEmpty
          renderValue={() => (
            <Box display="flex" alignItems="center" gap={0.5}>
              <Typography
                sx={{ fontWeight: 500, fontSize: "0.8em", textAlign: "left" }}
              >
                {label}:
              </Typography>
              <Typography
                sx={{ fontWeight: 600, fontSize: "0.8em", textAlign: "left" }}
              >
                {selectedLabel}
              </Typography>
            </Box>
          )}
          input={
            <OutlinedInput
              sx={{
                borderRadius: borderRadiusVal ?? "999px",
                // px: 1,
                // py: 0.5,
                backgroundColor: "#fff",
                // padding:"10px 14px",

                "& .MuiOutlinedInput-notchedOutline": {
                  border:borderVal,
                  boxShadow:boxShadow,
                  // width:"186px",
                  // height:'55px',
                  
                },

                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border:borderVal
                },

                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border:borderVal
                },

                // "&.Mui-error .MuiOutlinedInput-notchedOutline": {
                //   border:borderVal
                // },
              }}
            />
          }
        >
          {options.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>

        {errorText && <FormHelperText>{errorText}</FormHelperText>}
      </FormControl>
    </Stack>
  );
};

export default ControlledSelectPill;
