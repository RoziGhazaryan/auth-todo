import SignUp from "../pages/sign-up";
import SignIn from "../pages/sign-in";
import TodoList from "../pages/todo-list";
import AddTodo from "../pages/add-todo";
import { IRoute } from "../models/IRoute";

export enum RouteNames {
  SIGN_UP = "/sign-up",
  SIGN_IN = "/sign-in",
  TODO_LIST = "/todo-list",
  ADD_TODO = "/add-todo",
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.SIGN_UP,
    component: SignUp,
    exact: true,
  },
  {
    path: RouteNames.SIGN_IN,
    component: SignIn,
    exact: true,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.TODO_LIST,
    component: TodoList,
    exact: true,
  },
  {
    path: RouteNames.ADD_TODO,
    component: AddTodo,
    exact: true,
  },
];
