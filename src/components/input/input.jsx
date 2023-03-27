import { useState } from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import { FlagSelect } from "../select/select";
import { SubmitButton } from "../button/button";

export const InputField = ({
  updateNumberData,
  addNumber,
  helperText,
  redError,
}) => {
  const [fieldValue, setFieldValue] = useState("");
  const [countryData, setCountryData] = useState("ru");

  const updateData = (country) => {
    setCountryData(country);
  };

  const clearAfterAdding = () => {
    setFieldValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addNumber();
      clearAfterAdding();
    }
  };

  const handleClick = () => {
    addNumber();
    clearAfterAdding();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setFieldValue(value);

    if (countryData === "ru") {
      if (value.length <= 9) {
      } else {
        updateNumberData("7" + value);
      }
    } else {
      if (value.length <= 8) {
      } else {
        updateNumberData("375" + value);
      }
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "18",
        display: "flex",
      }}
    >
      <FlagSelect updateData={updateData} />
      <TextField
        value={fieldValue}
        onChange={handleChange}
        fullWidth
        inputProps={{
          maxLength: countryData === "ru" ? 10 : 9,
          autocomplete: "off",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {countryData === "ru" ? <div>+7</div> : <div>+375</div>}
            </InputAdornment>
          ),
        }}
        error={redError}
        id="filled-basic"
        label="Введите номер"
        helperText={helperText}
        variant="filled"
        onKeyDown={handleKeyDown}
      />
      <Box
        sx={{
          height: "100%",
        }}
      >
        <SubmitButton
          handleClick={handleClick}
          clearAfterAdding={clearAfterAdding}
        />
      </Box>
    </Box>
  );
};
