import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
   userState: IUser[];
   isLoading: boolean;
   error: string;
}

const initialState: UserState = {
   userState: [],
   isLoading: false,
   error: '',
}

export const userSlice = createSlice({
   name: 'userState',
   initialState,
   reducers: {
      addUserData(state, action: PayloadAction<any>) {
         state.userState = action.payload;
      }
   },
})

export default userSlice.reducer;