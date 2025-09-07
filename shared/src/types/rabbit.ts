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

export namespace Rabbit {
  export interface SendMessage {
    newMessageCallback: MessageToRealtime;
  }

  export interface Consume {
    newMessage: MessageFromRealtime;
  }
}
