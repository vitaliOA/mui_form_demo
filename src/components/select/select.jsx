import { Box, FormControl, Select, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";

export const FlagSelect = ({ control, inputCleaner }) => {
  return (
    <Box
      sx={{
        width: "30",
        mr: "2vw",
      }}
    >
      <Controller
        render={({ field: { onChange, value } }) => (
          <FormControl variant="filled" fullWidth>
            <Select
              value={value}
              onChange={(e) => {
                onChange(e);
                inputCleaner();
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="country"
              name="formSelect"
            >
              <MenuItem
                value="ru"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  alt="RU"
                  width="24"
                  height="17"
                  src="https://flagcdn.com/24x18/ru.png"
                />
              </MenuItem>
              <MenuItem
                value="by"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  alt="BY"
                  width="24"
                  height="17"
                  src="https://flagcdn.com/24x18/by.png"
                />
              </MenuItem>
            </Select>
          </FormControl>
        )}
        control={control}
        name={"selectValue"}
      />
    </Box>
  );
};
