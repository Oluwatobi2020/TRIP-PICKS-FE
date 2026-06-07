import React from "react";
import {
  Autocomplete,
  TextField,
  Stack,
  Typography,
  FormHelperText,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { get } from "lodash-es";
import type { SxProps, Theme } from "@mui/material/styles";
import type { FormikProps } from "formik";
import { Icon } from "@iconify/react";

export interface AutocompleteOption {
  id: string | number;
  label: string;
  value: string;
  subLabel?: string;
  type?: "location" | "hotel" | "recent";
}

interface ControlledAutocompleteProps {
  formik: FormikProps<any>;
  name: string;
  label?: string;
  placeholder?: string;
  borderVal?: string;
  bgColoor?: string;
  options: AutocompleteOption[];
  disabled?: boolean;
  inFieldLabel?: boolean;
  sx?: SxProps<Theme>;
}

const getIcon = (type?: AutocompleteOption["type"]) => {
  switch (type) {
    case "hotel":
      return <Icon icon="famicons:location-outline" width="22" height="22" />;
    case "recent":
      return <Icon icon="gridicons:time" width="22" height="22" />;
    default:
      return <Icon icon="famicons:location-outline" width="22" height="22" />;
  }
};

const ControlledAutocomplete: React.FC<ControlledAutocompleteProps> = ({
  formik,
  name,
  label,
  placeholder = "Search...",
  options,
  disabled,
  inFieldLabel,
  bgColoor = "#ffffff",
  borderVal = "1px solid #D1D5DB",
  sx,
}) => {
  const showError =
    get(formik.touched, name) && Boolean(get(formik.errors, name));

  const errorText = (() => {
    const error = get(formik.errors, name);
    if (get(formik.touched, name) && typeof error === "string") {
      return error;
    }
    return "";
  })();

  const selectedOption =
    options.find((opt) => opt.value === get(formik.values, name)) ?? null;

  return (
    <Stack spacing={0.5} sx={{ width: "100%", ...sx }}>
      {!inFieldLabel && label && (
        <Typography fontWeight={500} fontSize="0.85rem">
          {label}
        </Typography>
      )}

      <Autocomplete
        fullWidth
        disabled={disabled}
        options={options}
        value={selectedOption}
        isOptionEqualToValue={(opt, val) => opt.value === val.value}
        getOptionLabel={(option) => option.label}
        onChange={(_, option) =>
          formik.setFieldValue(name, option?.value ?? "")
        }
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            size="small"
            error={showError}
            InputProps={{
              ...params.InputProps,
              sx: {
                borderRadius: "8px",
                backgroundColor: `${bgColoor}`,
                "& .MuiOutlinedInput-notchedOutline": {
                  border: `${borderVal}`,
                },
              },
            }}
          />
        )}
        renderOption={(props, option) => {
          const { key, ...rest } = props;

          return (
            <ListItem key={key} {...rest} sx={{ gap: 1 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                {getIcon(option.type)}
              </ListItemIcon>
              <ListItemText
                primary={option.label}
                secondary={option.subLabel}
              />
            </ListItem>
          );
        }}
      />

      <FormHelperText error={showError}>{errorText}</FormHelperText>
    </Stack>
  );
};

export default ControlledAutocomplete;
