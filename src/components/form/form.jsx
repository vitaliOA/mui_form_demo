import { Box } from "@mui/material";
import { FlagSelect } from "../select/select";
import { SubmitButton } from "../button/button";
import { InputComponent } from "../input/input";

export const FormField = ({
  handleClick,
  control,
  countryData,
  redError,
  inputError,
  onSubmit,
  inputCleaner,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "18",
        display: "flex",
      }}
    >
      <FlagSelect control={control} inputCleaner={inputCleaner} />
      <InputComponent
        control={control}
        countryData={countryData}
        inputError={inputError}
        redError={redError}
        onSubmit={onSubmit}
      />
      <Box
        sx={{
          height: "100%",
        }}
      >
        <SubmitButton handleClick={handleClick} />
      </Box>
    </Box>
  );
};
