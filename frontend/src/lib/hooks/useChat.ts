import type { Entities } from "@roleet/shared";
import { useEffect, useState } from "react";
import type { ChatSocket } from "@/types/socket";
import { useSocket } from "./useSocket";

export function useChat(room: string, initialMessages: Entities.MessageChat[]) {
  const { socket, isConnected } = useSocket<
    ChatSocket.ServerToClientEvents,
    ChatSocket.ClientToServerEvents
  >();
  const [messages, setMessages] = useState(initialMessages);

  const sendMessage: ChatSocket.ClientToServerEvents["send_message"] = (
    message,
  ) => {
    if (!socket) return;
    socket.emit("send_message", { ...message, campaign: room });
  };

  useEffect(() => {
    if (!socket) return;

    socket.emit("join_room", room);

    socket.on("listen_message", (payload) => {
      setMessages((oldMessages) => [...oldMessages, payload]);
    });
  }, [socket, room]);

  return {
    messages,
    sendMessage,
    isConnected,
  };
}
