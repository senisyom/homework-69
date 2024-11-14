export interface IChannel {
  title: string;
  status: boolean;
  id?: string;
}

export interface IChannelApi {
  [id: string]: IChannel;
}
