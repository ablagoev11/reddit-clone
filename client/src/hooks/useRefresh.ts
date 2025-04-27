import axios from "../api/axios";
import { useAppDispatch } from "../app/hooks";
import { login } from "../features/auth/authSlice";

const useRefresh = () => {
  const dispatch = useAppDispatch();

  const refresh = async () => {
    const response = await axios.get("/auth/refresh", {
      withCredentials: true,
    });
    let accessToken;
    if (response.status === 200) {
      accessToken = response.data.access_token;
      dispatch(login(accessToken));
    }
    return accessToken;
  };

  return refresh;
};

export default useRefresh;
