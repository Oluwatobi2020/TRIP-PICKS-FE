import { Box, Container } from "@mui/material";
import TopNav from "../TopNav";
import Footer from "../Footer";
import FooterSection from "../Footer/FooterSection";
import ShowLoader from "../../Loader/ShowLoader";

const ViewPort = ({ children, showReadyToBook, showFooter = true }: any) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Container
        sx={{
          width: "100%",
          display: {
            xl: "flex",
            lg: "none",
            md: "none",
            sm: "none",
            xs: "none",
          },
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <TopNav />
        {children}
        {showFooter && <FooterSection showReadyToBook={showReadyToBook} />}
      </Container>
      <Box
        sx={{
          width: "100%",
          display: {
            xl: "none",
            lg: "flex",
            md: "flex",
            sm: "flex",
            xs: "flex",
          },
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <TopNav />
        {children}
        {showFooter && <FooterSection showReadyToBook={showReadyToBook} />}
      </Box>
    </Box>
  );
};

export default ViewPort;
