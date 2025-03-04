import {  createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserItem {
  users: string[];
}

const initialState: UserItem = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<string>) {
      const newUser: string = action.payload;
      state.users.push(newUser);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
