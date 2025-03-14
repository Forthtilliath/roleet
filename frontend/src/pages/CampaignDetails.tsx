import { useGetCampaignQuery } from "@/lib/graphql/generated/graphql-types";
import { useParams } from "react-router-dom";
import CampaignDetailsLayout from "../templates/CampaignDetailsLayout";

export default function CampaignDetails() {
  const { id } = useParams();
  const { loading, error, data } = useGetCampaignQuery({
    variables: { id: Number(id) },
  });

  if (error) return <p>Oops, something went awry...</p>;
  if (loading)
    return <p>Enhance your calm, we're still fetching this data...</p>;
  if (!data) return <p>We found nothing to display.</p>;

  return <CampaignDetailsLayout campaign={data.getCampaign} />;
}
