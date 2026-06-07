"use client";

import SavedActivity from "@/components/SavedActivity";
import ViewPort from "@/shared/Layout/Viewport";

const LandinPageLayout = () => {
  return (
    <ViewPort showReadyToBook={false} sx={{ width: "100%" }}>
      <SavedActivity />
    </ViewPort>
  );
};

export default LandinPageLayout;
