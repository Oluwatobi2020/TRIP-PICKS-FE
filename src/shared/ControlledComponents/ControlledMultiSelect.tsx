import React from "react";
import {
  FormControl,
  FormHelperText,
  Stack,
  Typography,
  Autocomplete,
  TextField,
  Chip,
} from "@mui/material";
import { get } from "lodash-es";
import type { SxProps, Theme } from "@mui/material/styles";
import type { FormikProps } from "formik";

interface Option {
  label: string;
  value: string | number;
}

interface ControlledMultiSelectProps {
  formik: FormikProps<any>;
  name: string;
  label: string;
  options: Option[];
  sx?: SxProps<Theme>;
  value?: (string | number)[];
  placeholder?: string;
  disabled?: boolean;
  disableOnChange?: boolean;
  inFieldLabel?: boolean;
}

const ControlledMultiSelect: React.FC<ControlledMultiSelectProps> = ({
  formik,
  sx,
  label,
  name,
  options,
  value,
  placeholder = "Search and select...",
  disabled = false,
  disableOnChange = false,
  inFieldLabel = false,
}) => {
  const showError =
    get(formik.touched, name) && Boolean(get(formik.errors, name));

  const errorText =
    get(formik.touched, name) && typeof get(formik.errors, name) === "string"
      ? (get(formik.errors, name) as string)
      : "";

  // Always normalize form value to array
  const currentValue: (string | number)[] =
    value ?? get(formik.values, name) ?? [];

  const selectedOptions: Option[] = options.filter((option) =>
    currentValue.includes(option.value),
  );

  return (
    <Stack sx={{ width: "100%", justifyContent: "center", ...sx }}>
      {!inFieldLabel && (
        <Typography sx={{ fontWeight: 500, fontSize: "0.7rem" }}>
          {label}
        </Typography>
      )}

      <FormControl fullWidth error={showError}>
        {inFieldLabel && (
          <Typography sx={{ fontWeight: 500, fontSize: "0.7rem" }}>
            {label}
          </Typography>
        )}

        <Autocomplete<Option, true>
          multiple
          options={options}
          value={selectedOptions}
          disabled={disabled}
          disableCloseOnSelect
          getOptionLabel={(option) => option.label}
          isOptionEqualToValue={(option, val) => option.value === val.value}
          onChange={
            disableOnChange
              ? undefined
              : (_, newValue) => {
                  formik.setFieldValue(
                    name,
                    newValue.map((opt) => opt.value),
                  );
                }
          }
          onBlur={() => formik.setFieldTouched(name, true)}
          slotProps={{
            listbox: {
              sx: {
                "& .MuiAutocomplete-option": {
                  fontSize: "0.85rem",
                  padding: "8px 12px",
                },
                "& .MuiAutocomplete-option:hover": {
                  backgroundColor: "#f9fafb",
                },
              },
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              placeholder={selectedOptions.length === 0 ? placeholder : ""}
              error={showError}
              sx={{
                "& .MuiOutlinedInput-root": {
                  minHeight: "36px",
                  borderRadius: "8px",
                  backgroundColor: "#f9fafb",
                  paddingRight: "8px",
                  alignItems: "center",

                  "& fieldset": {
                    border: "1px solid #e5e7eb",
                  },
                  "&:hover fieldset": {
                    border: "1px solid #e5e7eb",
                  },
                  "&.Mui-focused fieldset": {
                    border: "1px solid #e5e7eb",
                  },
                },
                "& .MuiInputBase-input": {
                  fontSize: "0.85rem",
                  padding: "8px 12px",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#98A2B3",
                  opacity: 1,
                },
              }}
            />
          )}
          renderValue={(value: Option[], getTagProps: (arg0: { index: number; }) => { [x: string]: any; key: any; }) =>
            value.map((option, index) => {
              const { key, ...chipProps } = getTagProps({ index });

              return (
                <Chip
                  {...chipProps}
                  key={key ?? option.value}
                  label={option.label}
                  size="small"
                  sx={{
                    fontSize: "0.75rem",
                    height: "22px",
                    borderRadius: "40px",
                    backgroundColor: "#f9fafb",
                  }}
                />
              );
            })
          }
        />

        <FormHelperText sx={{ color: "error.main" }}>
          {errorText}
        </FormHelperText>
      </FormControl>
    </Stack>
  );
};

export default ControlledMultiSelect;
