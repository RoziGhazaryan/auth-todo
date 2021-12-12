import React from "react";
import SignIn from "../pages/sign-in";
import Home from "../pages/home";
import SignUp from "../pages/sign-up";
import AddTodo from "../pages/add-todo";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  SIGN_UP = '/sign-up',
  SIGN_IN = '/sign-in',
  HOME = '/todo-list',
  ADD_TODO = '/add-todo',
}

export const publicRoute: IRoute[] = [
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
]

export const privateRoute: IRoute[] = [
  {
    path: RouteNames.HOME,
    component: Home,
    exact: true,
  },
  {
    path: RouteNames.ADD_TODO,
    component: AddTodo,
    exact: true,
  }
]
