import { useEffect, useState } from "react";
import { type Socket, io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_WS_URL || "http://gateway";

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const newSocket = io(SOCKET_URL, {
      path: "/socket.io/",
      transports: ["websocket"],
    });

    newSocket.on("connect", () => {
      setIsConnected(true);
    });

    newSocket.on("disconnect", () => {
      setIsConnected(false);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return { socket, isConnected };
};
