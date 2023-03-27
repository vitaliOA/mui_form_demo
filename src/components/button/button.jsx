import { Button, Box } from "@mui/material";

export const SubmitButton = ({ handleClick }) => {
  return (
    <Box
      sx={{
        marginLeft: "1vw",
        width: "100%",
        height: "70%",
        display: "flex",
      }}
    >
      <Button onClick={handleClick} variant="outlined">
        Отправить
      </Button>
    </Box>
  );
};
