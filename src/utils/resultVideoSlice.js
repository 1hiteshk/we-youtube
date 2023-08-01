import { createSlice } from "@reduxjs/toolkit";

const resultVideoSlice = createSlice({
    name: "resultVideo",
    initialState: {
        videos: []
    },
    reducers: {
        addVideos: (state,action) => {
            state.videos = [ action.payload] ;
        },
    },
})

export const{addVideos} = resultVideoSlice.actions;

export default resultVideoSlice.reducer;