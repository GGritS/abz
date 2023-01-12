import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { FC } from "react";
import { Position } from "../../../../types/type";

type PositionsRadioGroupProps = {
  positions: Position[];
  onChangePosition: (value: string, id: number) => void;
};

export const PositionsRadioGroup: FC<PositionsRadioGroupProps> = ({
  positions,
  onChangePosition,
}) => {
  return (
    <FormControl>
      <div>Select your position</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="positions"
      >
        {positions.length &&
          positions.map((pos) => (
            <FormControlLabel
              name="position"
              value={pos.name}
              control={<Radio color="secondary" />}
              label={pos.name}
              key={pos.id}
              onChange={() => onChangePosition(pos.name, pos.id)}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
};
