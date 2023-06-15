import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const request: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 2500,
  headers: {
    accept: 'application/json',
  },
});

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const jwt = window.localStorage.getItem('accessToken') ?? '';

  if (!jwt) {
    config.headers.accessToken = null;
    return config;
  }

  config.headers.authorization = `Bearer ${jwt}`;
  return config;
};

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  console.error(error);
  return Promise.reject(error);
};

request.interceptors.request.use(onRequest, onErrorResponse);

request.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response);

    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default request;
