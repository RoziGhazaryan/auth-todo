import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
   userState: IUser;
   isLoading: boolean;
   error: string;
}

const initialState: UserState = {
   userState: {
      id: 0,
      login: '',
      password: '',
      todoId: 0,
      todo: [],
   },
   isLoading: false,
   error: '',
}

function getUsers() {
   const usersStr = localStorage.getItem('users') as string;
   const users = JSON.parse(usersStr);

   return users;
}

export const userSlice = createSlice({
   name: 'userState',
   initialState,
   reducers: {
      refreshUserData(state) {
         const users = getUsers();
         const userIdStr = sessionStorage.getItem('userId') as string;
         const userId = JSON.parse(userIdStr);
         const user = users.find((el: any) => el.id === userId);
         state.userState = user;
      },
      addTodo(state, action: PayloadAction<any>) {
         const { userState } = state;
         const users = getUsers();
         const userIndex = users.findIndex((el: any) => el.id === userState.id);
         const user = users[userIndex];
         user.todo.push(action.payload);
         user.todoId += 1;
         localStorage.setItem('users', JSON.stringify(users));

         state.userState = user;
      },
      changeTodoStatus(state, action: PayloadAction<any>) {
         const { userState } = state;
         const users = getUsers();
         const userIndex = users.findIndex((el: any) => el.id === userState.id);
         const user = users[userIndex];
         const todo = user.todo.find((el:any) => el.id === action.payload.id);
         todo.status = action.payload.status;
         localStorage.setItem('users', JSON.stringify(users));

         state.userState = user;
      }
   },
})

export default userSlice.reducer;