export interface MessageFromRealtime {
  content: string;
  createdAt: string;
  ownerId: string;
  campaignId: string;
}
export interface MessageToRealtime {
  id: string;
  content: string;
  campaign: {
    id: string;
  };
  owner: {
    id: string;
  };
}
export declare namespace Rabbit {
  interface SendMessage {
    newMessageCallback: MessageToRealtime;
  }
  interface Consume {
    newMessage: MessageFromRealtime;
  }
}
