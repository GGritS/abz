import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useFormikContext } from "formik";
import React, { FC } from "react";
import { InitialValuesFormik } from "..";
import { Position } from "../../../../types/type";

type PositionsRadioGroupProps = {
  positions: Position[];
};

export const PositionsRadioGroup: FC<PositionsRadioGroupProps> = ({
  positions,
}) => {
  const { values, handleChange } = useFormikContext<InitialValuesFormik>();

  return (
    <FormControl>
      <div>Select your position</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="positions"
        value={values.position}
        onChange={handleChange}
      >
        {positions.length &&
          positions.map((pos) => (
            <FormControlLabel
              name="position"
              value={pos.name}
              control={<Radio color="secondary" />}
              label={pos.name}
              key={pos.id}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
};
