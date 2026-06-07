"use client";

import HomePage from "@/components/HomePage";
import ViewPort from "@/shared/Layout/Viewport";

const LandinPageLayout = () => {
  return (
    <ViewPort showReadyToBook={false} sx={{ width: "100%" }}>
      <HomePage />
    </ViewPort>
  );
};

export default LandinPageLayout;
