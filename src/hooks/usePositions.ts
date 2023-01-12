import axios from "axios";
import { PositionResponse } from "../types/type";
import { useAsyncRetry } from "react-use";

const fetchPositions = async () => {
  const url = `https://frontend-test-assignment-api.abz.agency/api/v1/positions`;
  const response = await axios.get<PositionResponse>(url);
  const { positions, success } = response.data;
  if (!success) throw new Error("error while try fetch positions");
  return positions;
};

export const usePositions = () => {
  const state = useAsyncRetry(async () => {
    const positionsResponse = await fetchPositions();
    return positionsResponse || [];
  });
  return state;
};
