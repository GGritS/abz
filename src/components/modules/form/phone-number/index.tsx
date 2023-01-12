import { TextField, TextFieldProps } from "@mui/material";
import React, { ChangeEvent, FC, useState } from "react";
// import phoneNumberJs from "libphonenumber-js";
import { AsYouType } from "libphonenumber-js";

export const PhoneNumberTextField: FC<TextFieldProps> = (props) => {
  const { onChange } = props;
  const [state, setState] = useState<string | undefined>(undefined);

  const onChangeTextField = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    const value = changeEvent.target.value;
    const phoneNumber = new AsYouType().input(value);
    const nationalNumber = phoneNumber;
    onChange?.(changeEvent);
    setState(nationalNumber);
  };
  return <TextField {...props} value={state} onChange={onChangeTextField} />;
};
