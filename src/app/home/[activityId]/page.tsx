
"use client"
import ActivityDetails from "@/components/HomePage/ActivityDetails";
import ViewPort from "@/shared/Layout/Viewport";
import { useParams } from "next/navigation";

const ActivityDetailsLayout = () => {
    const params = useParams();
    const activityId = params.activityId as string;
  return (
    <ViewPort showReadyToBook={false} sx={{ width: "100%" }}>
      <ActivityDetails activityId={activityId} />
    </ViewPort>
  );
};

export default ActivityDetailsLayout;
