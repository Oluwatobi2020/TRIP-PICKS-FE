import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box, Grid, Typography } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

interface CustomProgressProps {
  progressValue: number;
  ratings?: string;
  barTitle?: string;
}

export default function CustomProgressBar({
  progressValue,
  ratings,
  barTitle,
}: CustomProgressProps) {
  const normalizedValue =
  (Math.min(progressValue, 5) / 5) * 100;
  return (
    <Box sx={{padding:"1rem 0"}}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", alignItems: "center", paddingBottom:"0.5rem" }}
      >
        {barTitle &&<Grid size={{ xs: 12, sm: 12, md: 9, lg: 9 }}>
          <Typography sx={{ fontSize: "1em" }}>{barTitle}</Typography>
        </Grid>}
        {ratings &&<Grid
          size={{ xs: 12, sm: 12, md: 3, lg: 3 }}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Typography sx={{ fontSize: "1em" }}>{ratings}</Typography>
        </Grid>}
      </Grid>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <BorderLinearProgress variant="determinate" value={normalizedValue} />
      </Stack>
    </Box>
  );
}
