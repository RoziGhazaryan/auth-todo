import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAction } from "../../models/IAction";
import { IUserState } from "../../models/IUserState";

const initialState: IUserState = {
  userState: {
    id: 0,
    login: "",
    password: "",
    todoId: 0,
    todo: [],
    tokens: [],
  },
  isLoading: false,
  error: "",
};

function getUsers() {
  const usersStr = localStorage.getItem("users") as string;
  const users = JSON.parse(usersStr);

  return users;
}

export const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    refreshUserData(state) {
      const users = getUsers();
      const token = sessionStorage.getItem("token") as string;
      const user = users.find((el: { tokens: Array<string> }) =>
        el.tokens.includes(token)
      );

      state.userState = user;
    },

    addTodo(state, action: PayloadAction<IAction>) {
      const { userState } = state;
      const users = getUsers();
      const userIndex = users.findIndex(
        (el: IAction) => el.id === userState.id
      );
      const user = users[userIndex];

      user.todo.push(action.payload);
      user.todoId += 1;

      localStorage.setItem("users", JSON.stringify(users));

      state.userState = user;
    },

    changeTodoStatus(state, action: PayloadAction<IAction>) {
      const { userState } = state;
      const users = getUsers();
      const userIndex = users.findIndex(
        (el: IAction) => el.id === userState.id
      );
      const user = users[userIndex];
      const todo = user.todo.find((el: IAction) => el.id === action.payload.id);

      todo.status = action.payload.status;

      localStorage.setItem("users", JSON.stringify(users));

      state.userState = user;
    },

    deleteTodo(state, action: PayloadAction<IAction>) {
      const { userState } = state;
      const users = getUsers();
      const userIndex = users.findIndex(
        (el: IAction) => el.id === userState.id
      );
      const user = users[userIndex];
      const todo = user.todo.find((el: IAction) => el.id === action.payload.id);

      user.todo.splice(user.todo.indexOf(todo), 1);

      localStorage.setItem("users", JSON.stringify(users));

      state.userState = user;
    },

    searchTodo(state, action: PayloadAction<string>) {
      const { userState } = state;
      const users = getUsers();
      const userIndex = users.findIndex(
        (el: IAction) => el.id === userState.id
      );
      const user = users[userIndex];
      user.todo = user.todo.filter(
        (el: { name: string; description: string }) =>
          el.name.includes(action.payload) ||
          el.description.includes(action.payload)
      );

      state.userState = user;
    },
  },
});

export default userSlice.reducer;
