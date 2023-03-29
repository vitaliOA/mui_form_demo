import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export const Item = ({ numberValue }) => {
  const onClickAlert = () => {
    alert(numberValue.numberData);
  };

  const Number = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Number onClick={onClickAlert}>
      {numberValue.countryData === "ru" ? "+7" : "+375"}
      {numberValue.numberData}
    </Number>
  );
};
