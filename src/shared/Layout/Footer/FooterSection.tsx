import React from "react";
import Footer from "./index";
import ReadyToBookYourStay from "./ReadyToBookYourStay";

const FooterSection = ({ showReadyToBook }: any) => {
  return (
    <div>
      {showReadyToBook && <ReadyToBookYourStay />}
      <Footer />
    </div>
  );
};

export default FooterSection;
