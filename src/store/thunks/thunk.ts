import { createAsyncThunk } from "@reduxjs/toolkit";
import { IChannel, IChannelApi } from "../../types";
import axiosApi from "../../axiosApi";

export const fetchAllChannels = createAsyncThunk<IChannel[], void>(
  "channel/fetchAllChannels",
  async () => {
    const response: { data: IChannelApi | null } =
      await axiosApi<IChannelApi | null>("channels.json");

    if (response.data) {
      const channelInObj = response.data;
      return Object.keys(channelInObj).map((channelId) => {
        return {
          ...channelInObj[channelId],
          id: channelId,
        };
      });
    }
    return [];
  }
);
