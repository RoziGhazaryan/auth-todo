import React from "react";
import SignIn from "../pages/sign-in";
import Home from "../pages/home";
import SignUp from "../pages/sign-up";
import TodoList from "../pages/todo/todo-list";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  SIGN_UP = '/sign-up',
  SIGN_IN = '/sign-in',
  HOME = '/home',
  TODO_LIST = '/todo-list',
}

export const publicRoute: IRoute[] = [
  {
    path: RouteNames.SIGN_UP,
    component: SignUp,
    exact: true
  },
  {
    path: RouteNames.SIGN_IN,
    component: SignIn,
    exact: true
  },
]

export const privateRoute: IRoute[] = [
  {
    path: RouteNames.HOME,
    component: Home,
    exact: true
  },
  {
    path: RouteNames.TODO_LIST,
    component: TodoList,
    exact: true
  },
]
