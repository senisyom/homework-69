export interface IChannel {
  id: number;
  name: string;
}

export interface IChannelApi {
  id: number;
  name: string;
  summary: string;
  image: {
    medium: string;
  };
}
