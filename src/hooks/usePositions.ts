import { PositionResponse } from "../types/type";
import { useAsyncRetry } from "react-use";
import apiClient from "../common/apiClient";

const fetchPositions = async () => {
  const url = `/positions`;
  const response = await apiClient.get<PositionResponse>(url);
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
