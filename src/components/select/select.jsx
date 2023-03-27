import { useState } from "react";
import { Box, FormControl, Select, MenuItem } from "@mui/material";

export const FlagSelect = ({ updateData }) => {
  const [country, setCountry] = useState("ru");

  const handleChange = (event) => {
    updateData(event.target.value);
    setCountry(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "30",
        mr: "2vw",
      }}
    >
      <FormControl variant="filled" fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="country"
          onChange={handleChange}
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
    </Box>
  );
};
