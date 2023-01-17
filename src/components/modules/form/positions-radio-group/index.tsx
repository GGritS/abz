import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useFormikContext } from "formik";
import React, { FC } from "react";
import { Position } from "../../../../types/type";
import { Loader } from "../../loader";

type PositionsRadioGroupProps = {
  positions: Position[];
};

export const PositionsRadioGroup: FC<PositionsRadioGroupProps> = (props) => {
  const { positions } = props;

  const { handleChange, handleBlur } = useFormikContext();

  return (
    <FormControl>
      <div>Select your position</div>
      {!positions.length ? (
        <Loader />
      ) : (
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="positions"
        >
          {positions.length &&
            positions.map((pos) => (
              <FormControlLabel
                name="position_id"
                value={pos.id}
                control={<Radio color="secondary" />}
                label={pos.name}
                key={pos.id}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
        </RadioGroup>
      )}
    </FormControl>
  );
};
