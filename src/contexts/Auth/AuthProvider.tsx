import { useEffect, useState } from "react";
import { useApi } from "../../api/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const authToken = localStorage.getItem("token");
      if (authToken) {
        // transforma o stringify em json
        const token = JSON.parse(authToken);
        const data = await api.validateToken(token);
        if (data.user) {
          setUser(data.user);
        }
      }
    };
    validateToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setToken = (token: string) => {
    const tokenStr = JSON.stringify(token);

    localStorage.setItem("token", tokenStr);
  };

  const signin = async (username: string, password: string) => {
    try {
      const data = await api.signin(username, password);

      if (data.user && data.token) {
        setUser(data.user);
        setToken(data.token);

        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const signup = async (
    name: string,
    lastname: string,
    username: string,
    email: string,
    password: string
  ) => {
    const data = await api.signup(name, lastname, username, email, password);
    if (data.user && data.password) {
      setUser(data.user);
      return true;
    }
    return false;
  };

  const profile = async (username: string) => {
    try {
      const response = await api.profile(username);
      return response;
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, signin, signup, profile }}>
      {children}
    </AuthContext.Provider>
  );
};
