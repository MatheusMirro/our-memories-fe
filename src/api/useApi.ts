import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const useApi = () => ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validateToken: async (token: string) => {
    const response = await api.post("/api/auth/validate", { token });
    return response.data;
  },
  signin: async (username: string, password: string) => {
    try {
      const response = await api.post("/login", {
        username,
        password,
      });

      return response.data;
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  },
  signup: async (
    name: string,
    lastname: string,
    username: string,
    email: string,
    password: string
  ) => {
    const response = await api.post("/api/users/register", {
      name,
      lastname,
      username,
      email,
      password,
    });
    return response.data;
  },
  profile: async (username: string) => {
    const token = localStorage.getItem("token");
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await api.get(`/api/users/${username}`, config);
      return response.data;
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  },
});
