"use client";

import CreatePlan from "@/components/Plans/CreatePlan";
import ViewPort from "@/shared/Layout/Viewport";

const LandinPageLayout = () => {
  return (
    <ViewPort showReadyToBook={false} sx={{ width: "100%" }}>
      <CreatePlan />
    </ViewPort>
  );
};

export default LandinPageLayout;
