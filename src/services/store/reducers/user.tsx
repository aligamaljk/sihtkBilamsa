import { createSlice } from "@reduxjs/toolkit";
import { getLang } from "../../user-storage";

const slice = createSlice({
  name: "user",
  initialState: {
    currentUser : null,
    currentLang : getLang(),
  },
  reducers: {
    setCurrentUser: (user, action) => {
      user.currentUser = action.payload; 
      // user.currentUser = getLang(); 
    },
    setCurrentLang: (user, action) => {
      user.currentLang = action.payload; 
    },
  },
});

export const {
  setCurrentUser,
  setCurrentLang,
} = slice.actions;

export default slice.reducer;

