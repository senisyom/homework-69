interface ChannelsState {
  chanel: [];
}

const initialState: ChannelsState = {
  chanel: [],
};

const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {},
});

export const channelReducer = channelSlice.reducer;
export const { } = channelSlice.actions;