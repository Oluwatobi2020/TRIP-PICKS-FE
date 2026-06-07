"use client";

import Plans from "@/components/Plans";
import ViewPort from "@/shared/Layout/Viewport";

const LandinPageLayout = () => {
  return (
    <ViewPort showReadyToBook={false} sx={{ width: "100%" }}>
      <Plans />
    </ViewPort>
  );
};

export default LandinPageLayout;
