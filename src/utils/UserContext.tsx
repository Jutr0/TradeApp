import { createContext } from "react";
import { IUser } from "./customTypes";

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
});

export type IUserContext = {
  user: IUser | null;
  setUser: (val: IUser | null) => void;
};
