import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice"
import gptSlice  from "./GptToggleSlice";
import language from "./LanguageSlice";
import GptSearch from "./GptSearchStore";

const appStore = configureStore(
    {
      reducer: {
        user: userSlice,
        gpt: gptSlice,
        lan: language,
        gptSearchStore: GptSearch,
      }
    }
);

export default appStore;