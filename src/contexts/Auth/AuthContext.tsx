import { createContext } from "react";
import { User } from "../../types/User";
import { Posts } from "../../types/Posts";

export type AuthContextType = {
  user: User | null;

  // findOne: (username: string) => Promise<boolean>;
  profile: (username: string) => Promise<{ user: string; posts: Posts[] }>;
  signin: (username: string, password: string) => Promise<boolean>;
  signup: (
    name: string,
    lastname: string,
    username: string,
    email: string,
    password: string
  ) => Promise<boolean>;
  // signout: () => void;
};
export const AuthContext = createContext<AuthContextType>(null!);
