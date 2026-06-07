"use client";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import { activities } from "@/helpers/utils";
import { Icon } from "@iconify/react";

const ActivityDetails = ({ activityId }: any) => {
  const router = useRouter();

  const activity = activities.find((item) => item.id === activityId);

  if (!activity) {
    notFound();
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid sx={{ paddingBottom: "1rem" }}>
        <Button
          startIcon={
            <Icon icon="material-symbols:arrow-back-rounded" color="#000" />
          }
          sx={{ mb: 3, color: "#000" }}
          onClick={() => router.back()}
        >
          Back
        </Button>
      </Grid>

      <Box
        component="img"
        src={activity.imageUrl}
        alt={activity.title}
        sx={{
          width: "100%",
          height: {
            xs: 250,
            md: 500,
          },
          objectFit: "cover",
          borderRadius: 3,
        }}
      />

      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        spacing={2}
        sx={{ justifyContent: "space-between", mt: 4 }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            {activity.title}
          </Typography>

          <Typography variant="h6" color="text.secondary">
            {activity.area}
          </Typography>
        </Box>

        <Box>
          <Rating value={activity.rating} precision={0.1} readOnly />

          <Typography>{activity.rating}/5</Typography>
        </Box>
      </Stack>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
        About
      </Typography>

      <Typography variant="body1" color="text.secondary">
        {activity.description}
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Stack spacing={2}>
        <Typography variant="h5">Details</Typography>

        <Typography>Category: {activity.category}</Typography>

        <Typography>Duration: {activity.durationMinutes} mins</Typography>

        <Typography>Price Level: {"₦".repeat(activity.priceLevel)}</Typography>
      </Stack>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Tags
      </Typography>

      <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
        {activity.tags.map((tag) => (
          <Chip key={tag} label={tag} color="primary" />
        ))}
      </Stack>

      <Grid
        container
        sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <Button sx={{ fontSize: "0.8em", backgroundColor: "secondary.main" }}>
          Save Activity
        </Button>
      </Grid>
    </Container>
  );
};

export default ActivityDetails;
