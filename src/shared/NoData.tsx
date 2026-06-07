import { Box, Grid, Stack, Typography } from "@mui/material";
import NoDataImage from "@/assets/empty-box.png";
import Image from "next/image";

const NoData = ({ title }: any) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid>
          <Image src={NoDataImage} alt="no-data-image" height={50} width={50} />
        </Grid>
        <Grid>
          <Typography>{`No ${title} found`}</Typography>
        </Grid>
      </Stack>
    </Box>
  );
};

export default NoData;
