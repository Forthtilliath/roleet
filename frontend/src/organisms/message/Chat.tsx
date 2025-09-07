import type { Entities } from "@roleet/shared";
import { type FormEvent, useEffect, useRef } from "react";
import { useChat } from "@/lib/hooks/useChat";
import { useCurrentUser } from "@/lib/zustand/userStore";
import { List } from "@/molecules/List";
import MessageCard from "./MessageCard";

type Props = {
  title: string;
  data: Entities.MessageChat[];
  room: string;
};
export default function Chat({ title, data, room }: Props) {
  const { messages, sendMessage, isConnected } = useChat(room, data);
  const currentUser = useCurrentUser();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (messages.length) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages.length]);

  if (!currentUser) return <p>Connectez vous pour accéder au Chat</p>;

  const hSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const data = new FormData(evt.currentTarget);
    const message = (data.get("msg") as string).trim();

    if (message) {
      sendMessage({
        ownerId: currentUser.id,
        content: message,
        campaignId: room,
      });
      evt.currentTarget.reset();
    }
  };

  if (!data.length)
    return (
      <>
        <h2>{title}</h2>
        <p>Rien à afficher ici :shrug: </p>
      </>
    );

  return (
    <div ref={ref} className="mb-4">
      <List
        title={`${title} (${isConnected ? "🟢" : "🔴"})`}
        data={messages}
        render={(message) => {
          return (
            <MessageCard
              content={message.content}
              createdAt={message.createdAt}
            />
          );
        }}
      />
      <form onSubmit={hSubmit}>
        <input type="text" name="msg" placeholder="Message..." />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}
