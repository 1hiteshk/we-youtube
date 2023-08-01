import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import resultVideoSlice from "./resultVideoSlice";

const store = configureStore({
      reducer : {
        app: appSlice,
        search: searchSlice,
        chat: chatSlice,
        resultVideo: resultVideoSlice,
      },
    });

export default store;