export type Position = {
  id: number;
  name: string;
};

export type PositionResponse = {
  success: boolean;
  positions: Position[];
};
