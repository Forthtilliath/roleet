import type { Entities } from "./entities";
export declare namespace ChatSocket {
  interface ServerToClientEvents {
    listen_message: (message: Entities.Message) => void;
  }
  interface ClientToServerEvents {
    send_message: (message: Entities.NewMessageInput) => void;
    join_room: (room: string) => void;
  }
}
