import { createSlice } from "@reduxjs/toolkit";
import { fetchTvShows, fetchLoading } from "../thunks/thunk";
import { IChannel, IChannelApi } from "../../types";
import { RootState } from "../../app/store";

export interface SearchTvShowState {
  shows: IChannel[];
  showDisplay: IChannelApi | null;
  fetchLoading: boolean;
}

const initialState: SearchTvShowState = {
  shows: [],
  showDisplay: null,
  fetchLoading: false,
};

export const tvShowSlice = createSlice({
  name: "TvShows",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTvShows.pending, (state) => {
        state.fetchLoading = true;
      })
      .addCase(fetchTvShows.fulfilled, (state, { payload: shows }) => {
        state.fetchLoading = false;
        state.shows = shows;
      })
      .addCase(fetchTvShows.rejected, (state) => {
        state.fetchLoading = false;
      })
      .addCase(fetchLoading.pending, (state) => {
        state.fetchLoading = true;
      })
      .addCase(fetchLoading.fulfilled, (state, { payload: showDisplay }) => {
        state.fetchLoading = false;
        state.showDisplay = showDisplay;
      })
      .addCase(fetchLoading.rejected, (state) => {
        state.fetchLoading = false;
      });
  },
});

export const channelReducer = tvShowSlice.reducer;
export const selectAutocomplete = (state: RootState) => state.channel.showDisplay;
export const SearchShows = (state: RootState) => state.channel.shows;
