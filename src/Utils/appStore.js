import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice"
import gptSlice  from "./GptToggleSlice";
import language from "./LanguageSlice";
const appStore = configureStore(
    {
      reducer: {
        user: userSlice,
        gpt: gptSlice,
        lan: language,
      }
    }
);

export default appStore;