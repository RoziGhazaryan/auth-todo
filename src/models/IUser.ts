export interface IUser {
  id: number;
  login: string;
  password: string;
  todoId: number;
  todo: Array<object>;
  tokens: Array<string>,
}