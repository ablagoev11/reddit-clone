import { useEffect } from "react";
import { axiosPrivate } from "../api/axios";
import { useAppSelector } from "../app/hooks";
import { getAuth } from "../features/auth/authSlice";
import useRefresh from "./useRefresh";

const useAxiosPrivate = () => {
  const auth = useAppSelector(getAuth);

  const refresh = useRefresh();
  useEffect(() => {
    const axiosRequest = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    const axiosResponse = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(axiosRequest);
      axiosPrivate.interceptors.response.eject(axiosResponse);
    };
  }, [auth, refresh]);
  return axiosPrivate;
};
export default useAxiosPrivate;
