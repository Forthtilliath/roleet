import type { Entities as SharedEntities } from "@roleet/shared";
import Chat from "@/organisms/message/Chat";
import type { Entities } from "@/types/entities";

type Props = {
  messages: SharedEntities.MessageChat[];
  campaign: Entities.Campaign["id"];
};
export function CampaignTabChat({ messages, campaign }: Props) {
  return <Chat title="Test" data={messages} room={campaign} />;
}
