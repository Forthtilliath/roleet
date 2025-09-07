import type { Entities } from "@roleet/shared";

export namespace ChatSocket {
  export interface ServerToClientEvents {
    listen_message: (message: Entities.MessageFull) => void;
  }

  export interface ClientToServerEvents {
    send_message: (message: Entities.MessageCreateInput) => void;
    join_room: (room: string) => void;
  }
}
