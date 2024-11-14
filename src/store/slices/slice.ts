import { PayloadAction } from "@reduxjs/toolkit";
import { fetchAllChannels } from "../thunks/thunk";
import { IChannel } from "../../types";

interface ChannelsState {
  chanel: IChannel[];
  isFetchLoading: boolean;
}

const initialState: ChannelsState = {
  chanel: [],
  isFetchLoading: false,
};

export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllChannels.pending, (state) => {
        state.isFetchLoading = true;
      })
      .addCase(fetchAllChannels.fulfilled, (state, actions: PayloadAction<IChannel[]>) => {
        state.chanels = actions.payload;
        state.isFetchLoading = false;
      })
      .addCase(fetchAllChannels.rejected, (state) => {
        state.isFetchLoading = false;
      });
  },
});

export const channelReducer = channelSlice.reducer;
export const {} = channelSlice.actions;
