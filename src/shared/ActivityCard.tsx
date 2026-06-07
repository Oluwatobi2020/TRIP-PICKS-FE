"use client";

import { Dispatch, useEffect, useState } from "react";
import { Box, Chip, Typography, IconButton, Tooltip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import { Activity } from "@/helpers/types";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useActivityToggleSaveMutation } from "@/lib/features/activity/activitySlice";
import { useLoader } from "@/hooks";
import { useSnackbar } from "notistack";
import secureLocalStorage from "react-secure-storage";

interface ActivityCardProps {
  activity: Activity;
  /** card width — defaults to 340px */
  width?: number | string;
  /** called when user clicks the card body */
  onClick?: (activity: Activity) => void;
  refreshData: () => void;
}

const priceDots = (level: number) =>
  Array.from({ length: 4 }, (_, i) => (
    <Box
      key={i}
      component="span"
      sx={{
        display: "inline-block",
        width: 6,
        height: 6,
        borderRadius: "50%",
        mx: "1px",
        background: i < level ? "#E8652A" : "rgba(255,255,255,0.3)",
        transition: "background 0.2s",
      }}
    />
  ));

const formatDuration = (mins: number) =>
  mins >= 60
    ? `${Math.floor(mins / 60)}h ${mins % 60 > 0 ? `${mins % 60}m` : ""}`.trim()
    : `${mins}m`;

const FALLBACK_GRADIENT =
  "linear-gradient(135deg, #1A1A2E 0%, #2D2D4E 40%, #E8652A 100%)";

export function ActivityCard({
  activity,
  width = 340,
  onClick,
  refreshData
}: ActivityCardProps) {
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { displayLoader, hideLoader } = useLoader();
  const { enqueueSnackbar } = useSnackbar();
  const [user, setUser] = useState<any>(null);

  const [activitiyToggleSave] = useActivityToggleSaveMutation();

  const {
    title,
    category,
    area,
    durationMinutes,
    priceLevel,
    rating,
    imageUrl,
    description,
    tags,
  } = activity;

  const handleSaveActivity = async (userId: string, activityId: string) => {
    try {
      displayLoader();
      const saveRes = await activitiyToggleSave({
        userId: userId,
        activityId: activityId,
      }).unwrap();
      console.log("saveRes", saveRes);
      enqueueSnackbar(saveRes?.message, {
        anchorOrigin: { vertical: "top", horizontal: "right" },
        autoHideDuration: 2500,
        preventDuplicate: true,
        variant: "success",
      });
      refreshData()
    } catch (error) {
      console.log("error", error);
      enqueueSnackbar("An error occured!", {
        anchorOrigin: { vertical: "top", horizontal: "right" },
        autoHideDuration: 2500,
        preventDuplicate: true,
        variant: "error",
      });
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    const storedUserData = secureLocalStorage.getItem("userDetails");
    setUser(storedUserData);
  }, []);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => router.push(`/home/${activity?.id}`)}
      sx={{
        width,
        borderRadius: "20px",
        overflow: "hidden",
        // cursor: onClick ? "pointer" : "default",
        cursor: "pointer",
        position: "relative",
        boxShadow: hovered
          ? "0 24px 60px rgba(232,101,42,0.22), 0 8px 20px rgba(0,0,0,0.18)"
          : "0 6px 24px rgba(0,0,0,0.12)",
        transition: "box-shadow 0.35s ease",
        background: "#1A1A2E",
        userSelect: "none",
      }}
    >
      {/* ── IMAGE SECTION ── */}
      <Box sx={{ position: "relative", height: 210, overflow: "hidden" }}>
        {/* image or fallback */}
        {!imgError ? (
          <Box
            component={motion.img}
            src={imageUrl}
            alt={title}
            onError={() => setImgError(true)}
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <Box
            component={motion.div}
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            sx={{
              width: "100%",
              height: "100%",
              background: FALLBACK_GRADIENT,
            }}
          />
        )}

        {/* gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(26,26,46,0.7) 100%)",
          }}
        />

        {/* Category pill — top left */}
        <Box sx={{ position: "absolute", top: 14, left: 14 }}>
          <Chip
            label={category}
            size="small"
            sx={{
              background: "rgba(232,101,42,0.92)",
              color: "white",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: 0.8,
              textTransform: "uppercase",
              height: 24,
              backdropFilter: "blur(6px)",
              "& .MuiChip-label": { px: 1.2 },
            }}
          />
        </Box>

        {/* Favourite — top right */}
        <Box sx={{ position: "absolute", top: 8, right: 8 }}>
          <Tooltip
            title={liked ? "Remove from favourites" : "Save"}
            placement="left"
          >
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                setLiked((l) => !l);
                handleSaveActivity(user?.id, activity?.id);
              }}
              component={motion.button}
              whileTap={{ scale: 0.8 }}
              sx={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
                color: liked ? "#FF4D6D" : "white",
                "&:hover": { background: "rgba(255,255,255,0.25)" },
                width: 34,
                height: 34,
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={liked ? "liked" : "unliked"}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {liked ? (
                    <Icon icon="mdi:favourite" width={17} height={17} />
                  ) : (
                    <Icon icon="hugeicons:favourite" width={17} height={17} />
                  )}
                </motion.div>
              </AnimatePresence>
            </IconButton>
          </Tooltip>
        </Box>

        {/* Rating badge — bottom left (overlaps body) */}
        <Box
          sx={{
            position: "absolute",
            bottom: 2,
            left: 16,
            display: "flex",
            alignItems: "center",
            gap: 0.4,
            background: "#E8652A",
            borderRadius: "10px",
            px: 1.2,
            py: 0.4,
            zIndex: 2,
            boxShadow: "0 4px 12px rgba(232,101,42,0.45)",
          }}
        >
          <Icon
            icon="material-symbols:star"
            width={13}
            height={13}
            color="#fff"
          />
          <Typography
            sx={{
              color: "white",
              fontSize: 13,
              fontWeight: 800,
              fontFamily: "'DM Sans', sans-serif",
              lineHeight: 1,
            }}
          >
            {rating.toFixed(1)}
          </Typography>
        </Box>
      </Box>

      {/* ── BODY SECTION ── */}
      <Box sx={{ px: 2.2, pt: 3.2, pb: 2.2 }}>
        {/* Title */}
        <Typography
          sx={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 20,
            fontWeight: 400,
            color: "white",
            lineHeight: 1.2,
            mb: 0.7,
            letterSpacing: -0.3,
          }}
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.55,
            mb: 1.8,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>

        {/* Meta row: location + duration + price */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 2,
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Icon icon="mdi:location" width={14} height={14} color="#E8652A" />
            <Typography
              sx={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12.5,
                fontWeight: 600,
                color: "rgba(255,255,255,0.75)",
              }}
            >
              {area}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Icon
              icon="famicons:time-sharp"
              width={14}
              height={14}
              color="rgba(255,255,255,0.45)"
            />
            <Typography
              sx={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12.5,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              {formatDuration(durationMinutes)}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
            {priceDots(priceLevel)}
          </Box>
        </Box>

        {/* Tags */}
        <Box sx={{ display: "flex", gap: 0.8, flexWrap: "wrap" }}>
          {tags?.map((tag) => {
            return (
              <Chip
                key={tag?.id}
                label={`#${tag?.value}`}
                size="small"
                sx={{
                  background: "rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 500,
                  height: 22,
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "6px",
                  "& .MuiChip-label": { px: 1 },
                  "&:hover": {
                    background: "rgba(232,101,42,0.15)",
                    color: "#E8652A",
                    borderColor: "rgba(232,101,42,0.3)",
                  },
                  transition: "all 0.2s",
                  cursor: "default",
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
