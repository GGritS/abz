import { useCallback, useEffect, useState } from "react";
import querystring from "querystring";
import apiClient from "../common/apiClient";

interface UseUsersParams {
  page: number;
  pageSize: number;
}

export const fetchUsers = async (params: UseUsersParams) => {
  const { page, pageSize } = params;

  const queryParams = { page, count: pageSize };

  const query = querystring.stringify(queryParams);

  const url = `/users?${query}`;

  const response = await apiClient.get(url);

  const { success } = response.data;

  if (!success) throw new Error("Error while trying fetch users");

  return response.data;
};

export const useUsers = (params: UseUsersParams) => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const fetchUsersState = useCallback(async () => {
    setLoading(true);
    const data = await fetchUsers(params);
    setData(data);
    setLoading(false);
  }, [params]);
  useEffect(() => {
    fetchUsersState();
  }, [fetchUsersState]);

  return { data, fetchUsersState, loading };
};
