import { Box, Grid } from "@mui/material";

interface HotelImageProps {
  children: React.ReactNode;

}

const HotelHero = ({
  children,
}: HotelImageProps) => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "4rem",
      }}
    >
      <Grid
        size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Image Wrapper */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            // overflow: "hidden",
          }}
        >
          <Box
            // component="img"
            // src={HeroImage}
            // alt="cip-hero-img"
            sx={{
              width: "100%",
              transition: "transform 0.5s ease",
              willChange: "transform",
              "&:hover": {
                transform: "scale(1.08)",
              },
            }}
          >
            {children}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HotelHero;
