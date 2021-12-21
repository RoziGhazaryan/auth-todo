import { IUser } from "./IUser";

export interface IUserState {
  userState: IUser;
  isLoading: boolean;
  error: string;
}
