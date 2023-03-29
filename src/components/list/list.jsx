import { useState } from "react";
import { Box, Stack } from "@mui/material";
import { FormField } from "../form/form";
import { Item } from "../item/item";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

export const List = () => {
  const [numberList, setNumberList] = useState([]);
  const [inputError, setInputError] = useState(" ");
  const [redError, setRedError] = useState("");
  const { getFieldState, handleSubmit, control, resetField, watch } = useForm({
    defaultValues: {
      textValue: "",
      selectValue: "ru",
    },
    mode: "onChange",
  });
  const numberData = watch("textValue");
  const countryData = watch("selectValue");
  const selectDirty = getFieldState("selectValue");

  const inputCleaner = () => {
    if (selectDirty.isDirty === true) {
      resetField("textValue");
    } else {
      resetField("textValue");
    }
  };

  const onSubmit = () => {
    const regex = /^[0-9]+$/;
    const id = nanoid();
    const newNumber = { numberData, id, countryData };
    if (regex.test(numberData)) {
      if (countryData === "ru") {
        if (numberData.length <= 9) {
        } else {
          setNumberList((prev) => [...prev, newNumber]);
        }
      } else {
        if (numberData.length <= 8) {
        } else {
          setNumberList((prev) => [...prev, newNumber]);
        }
      }
    } else {
      setInputError("Формат вводимого номера неверен");
      setRedError("error");
    }
    setTimeout(() => {
      setInputError(" ");
      setRedError("");
    }, 2000);
    resetField("textValue");
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
        <FormField
          countryData={countryData}
          control={control}
          error
          inputCleaner={inputCleaner}
          Dirty={getFieldState}
          redError={redError}
          inputError={inputError}
          handleClick={handleSubmit(onSubmit)}
          onSubmit={onSubmit}
        />
      </Box>
      <Box sx={{ width: "60%", paddingTop: "1vh" }}>
        <Stack spacing={2}>
          {numberList.map((item) => (
            <Item numberValue={item} key={item.id} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
