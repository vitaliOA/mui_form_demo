import { useState } from "react";
import { Box, Stack } from "@mui/material";
import { InputField } from "../input/input";
import { Item } from "../item/item";

export const List = () => {
  const [numberList, setNumberList] = useState([]);
  const [numberData, setNumberData] = useState("");
  const [inputError, setInputError] = useState(" ");
  const [redError, setRedError] = useState("");

  const updateNumberData = (fieldValue) => {
    setNumberData(fieldValue);
  };

  const addNumber = () => {
    const regex = /^[0-9]+$/;
    const id = numberData;
    const newNumber = { numberData, id };
    if (numberData !== "" && regex.test(numberData)) {
      setNumberList((prev) => [...prev, newNumber]);
    } else {
      setInputError("Формат вводимого номера неверен");
      setRedError("error");
    }
    setNumberData("");
    setTimeout(() => {
      setInputError(" ");
      setRedError("");
    }, 3000);
  };

  return (
    <Box
      sx={{
        width: "80vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "60%",
          pt: "15vh",
        }}
      >
        <InputField
          error
          redError={redError}
          helperText={inputError}
          updateNumberData={updateNumberData}
          addNumber={addNumber}
        />
      </Box>
      <Box sx={{ width: "60%" }}>
        <Stack spacing={2}>
          {numberList.map((numberItem) => (
            <Item numberValue={numberItem} key={numberItem.id} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
