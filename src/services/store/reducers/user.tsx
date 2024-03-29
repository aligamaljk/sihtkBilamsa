import { createSlice } from "@reduxjs/toolkit";
import { getLang } from "../../user-storage";

const slice = createSlice({
  name: "user",
  initialState: {
    currentUser : null,
    currentLang : getLang(),
    currentSports : [],
  },
  reducers: {
    setCurrentUser: (user, action) => {
      user.currentUser = action.payload; 
      // user.currentUser = getLang(); 
    },
    setCurrentLang: (user, action) => {
      user.currentLang = action.payload; 
    },
    setCurrentSports: (user, action) => {
      user.currentSports = action.payload; 
    },
  },
});

export const {
  setCurrentUser,
  setCurrentLang,
  setCurrentSports
} = slice.actions;

export default slice.reducer;

