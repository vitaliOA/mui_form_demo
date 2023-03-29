import { Controller } from "react-hook-form";
import { TextField, InputAdornment } from "@mui/material";

export const InputComponent = ({
  control,
  inputError,
  redError,
  countryData,
  onSubmit,
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <Controller
      name={"textValue"}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          inputProps={{
            autoComplete: "off",
            maxLength: countryData === "ru" ? "10" : "9",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {countryData === "ru" ? <div>+7</div> : <div>+375</div>}
              </InputAdornment>
            ),
          }}
          error={redError}
          helperText={inputError}
          onKeyDown={handleKeyDown}
          id="filled-basic"
          label="Введите номер"
          variant="filled"
        />
      )}
    />
  );
};
