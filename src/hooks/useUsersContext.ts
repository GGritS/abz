import { useContext } from "react";
import { UserContext } from "../contexts/user-context";

export const useUsersContext = () => {
  return useContext(UserContext);
};
