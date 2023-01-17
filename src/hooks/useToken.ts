import { useAsyncRetry, useCookie } from "react-use";
import apiClient from "../common/apiClient";
import { TOKEN_EXPIRE, TOKEN_KEY } from "../constants";

type TokenResponse = {
  success: boolean;
  token: string;
};

const fetchToken = async () => {
  const response = await apiClient.get<TokenResponse>("/token");

  const { success } = response.data;

  if (!success) throw new Error("Error while trying fetch users");

  return response.data;
};

const useToken = () => {
  const [token, updateToken, deleteToken] = useCookie(TOKEN_KEY);

  const state = useAsyncRetry(async () => {
    if (token) return token;

    const tokenResponse = await fetchToken();

    const newToken = tokenResponse.token;

    updateToken(newToken, { expires: TOKEN_EXPIRE });

    return tokenResponse.token;
  }, []);

  return { tokenState: state, deleteToken }
};

export default useToken;
