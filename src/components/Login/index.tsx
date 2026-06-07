"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { motion, AnimatePresence, Variants } from "framer-motion";

import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import ControlledTextField from "@/shared/ControlledComponents/ControlledTextField";
import ControlledPasswordField from "@/shared/ControlledComponents/ControlledPasswordField";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { useLoginUserMutation } from "@/lib/features/auth/authSlice";
import { useLoader } from "@/hooks";
import { useSnackbar } from "notistack";
import secureLocalStorage from "react-secure-storage";

const ShapeCircle = ({ style }: { style: React.CSSProperties }) => (
  <Box
    component={motion.div}
    animate={{ y: [0, -14, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    sx={{
      position: "absolute",
      borderRadius: "50%",
      opacity: 0.18,
      background: "white",
      ...style,
    }}
  />
);

const HeroIllustration = () => (
  <svg
    viewBox="0 0 380 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", maxWidth: 400, marginTop: 24 }}
  >
    {/* Arrow */}
    <motion.path
      d="M200 240 L290 120"
      stroke="#4DFFCE"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
    />
    <motion.polygon
      points="290,120 268,128 282,148"
      fill="#4DFFCE"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.7, duration: 0.4 }}
    />

    {/* Figure 1 – blue suit, pointing up */}
    <motion.g
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.7 }}
    >
      {/* body */}
      <ellipse cx="220" cy="230" rx="28" ry="52" fill="#3B5BFF" />
      {/* head */}
      <circle cx="220" cy="164" r="22" fill="#FBBF8B" />
      {/* raised arm */}
      <path
        d="M220 195 Q260 160 285 120"
        stroke="#3B5BFF"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      {/* hand */}
      <circle cx="285" cy="120" r="8" fill="#FBBF8B" />
    </motion.g>

    {/* Figure 2 – pink, standing */}
    <motion.g
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
    >
      <ellipse cx="155" cy="240" rx="20" ry="44" fill="#FF6FA8" />
      <circle cx="155" cy="182" r="18" fill="#FBBF8B" />
      {/* checkmark badge */}
      <circle cx="185" cy="250" r="14" fill="#4DFFCE" />
      <path
        d="M178 250 L183 256 L193 244"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.g>

    {/* Ground shadow */}
    <ellipse cx="190" cy="290" rx="100" ry="10" fill="rgba(0,0,0,0.15)" />
  </svg>
);

export default function LoginPage() {
  const router = useRouter();
  const { hideLoader, displayLoader } = useLoader();
  const { enqueueSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);

  const [loginUser] = useLoginUserMutation();

  const handleLogin = async (values: any) => {
    try {
      displayLoader();
      const loginRes = await loginUser(values).unwrap();
      console.log("loginRes", loginRes);
      enqueueSnackbar("Login Successful!", {
        anchorOrigin: { vertical: "top", horizontal: "right" },
        autoHideDuration: 2500,
        preventDuplicate: true,
        variant: "success",
      });
      formik.resetForm();
      localStorage.setItem("token", loginRes?.token);
      secureLocalStorage.setItem("userDetails", loginRes?.user);
      secureLocalStorage.setItem("isSignedIn", true);
      router.push("/home")
    } catch (error: any) {
      console.log("error", error);
      enqueueSnackbar(error?.data?.error, {
        anchorOrigin: { vertical: "top", horizontal: "right" },
        autoHideDuration: 2500,
        preventDuplicate: true,
        variant: "error",
      });
    } finally {
      hideLoader();
    }
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Enter a valid email"),
    password: yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const leftPanelVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightPanelVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const displayVisibility = showPassword ? (
    <Icon icon="solar:eye-linear" width="20" height="20" />
  ) : (
    <Icon icon="mynaui:eye-off" width="20" height="20" />
  );

  const showPasswordBasedOnFieldType = showPassword ? "text" : "password";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* ── LEFT PANEL ── */}
      <Box
        component={motion.div}
        variants={leftPanelVariants}
        initial="hidden"
        animate="visible"
        sx={{
          flex: "0 0 55%",
          background:
            "linear-gradient(145deg, #1A40FF 0%, #0A22CC 60%, #0618A8 100%)",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          justifyContent: "space-between",
          p: 5,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative blobs */}
        <ShapeCircle
          style={{ width: 340, height: 340, top: -80, right: -80 }}
        />
        <ShapeCircle
          style={{ width: 200, height: 200, bottom: 60, left: -60 }}
        />
        <ShapeCircle
          style={{ width: 100, height: 100, top: "40%", left: "55%" }}
        />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: "8px",
                background: "linear-gradient(135deg, #4DFFCE, #1A56FF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{ color: "white", fontWeight: 800, fontSize: 14 }}
              >
                T
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "white",
                fontWeight: 700,
                fontSize: 17,
                letterSpacing: -0.3,
              }}
            >
              Trip Picks
            </Typography>
          </Box>
        </motion.div>

        {/* Center copy */}
        <Box sx={{ zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
          >
            <Typography
              sx={{
                color: "rgba(255,255,255,0.82)",
                fontSize: { md: "2rem", lg: "2.6rem" },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 0.5,
              }}
            >
              Pick a trip
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: { md: "2rem", lg: "2.6rem" },
                fontWeight: 800,
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              so you can enjoy your vacation
            </Typography>
          </motion.div>

          <HeroIllustration />
        </Box>

        {/* Bottom tag */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(6px)",
              borderRadius: "20px",
              px: 2,
              py: 0.8,
              cursor: "pointer",
              "&:hover": { background: "rgba(255,255,255,0.18)" },
              transition: "background 0.2s",
            }}
          >
            <Box
              sx={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: "#FF4D6D",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{ color: "white", fontSize: 11, fontWeight: 700 }}
              >
                ?
              </Typography>
            </Box>
            <Typography sx={{ color: "white", fontSize: 13, fontWeight: 500 }}>
              What Is Pick A Trip?
            </Typography>
          </Box>
        </motion.div> */}
      </Box>

      {/* ── RIGHT PANEL ── */}
      <Box
        component={motion.div}
        variants={rightPanelVariants}
        initial="hidden"
        animate="visible"
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF",
          p: { xs: 3, sm: 5 },
        }}
      >
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{ width: "100%", maxWidth: 380 }}
        >
          {/* Heading */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#0D1B4B",
                mb: 3,
                letterSpacing: -0.5,
              }}
            >
              Log in
            </Typography>
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants}>
            <ControlledTextField
              formik={formik}
              name="email"
              label="Email"
              placeholder="Enter your email here"
            />
          </motion.div>

          {/* Password */}
          <motion.div variants={itemVariants}>
            <ControlledPasswordField
              name="password"
              placeholder="************"
              label="Password"
              formik={formik}
              type={showPasswordBasedOnFieldType}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    edge="end"
                  >
                    {displayVisibility}
                  </IconButton>
                </InputAdornment>
              }
              borderRadiusVal="12px"
            />
          </motion.div>

          {/* Submit */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
          >
            <Button
              fullWidth
              variant="contained"
              sx={{
                py: 1.55,
                mb: 2,
                background:
                  "linear-gradient(145deg, #1A40FF 0%, #0A22CC 60%, #0618A8 100%)",
                color: "white",
                fontSize: "1rem",
                fontWeight: 700,
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #FF2D5B 0%, #E01A48 100%)",
                  transform: "translateY(-1px)",
                  boxShadow: "0 8px 24px rgba(255,45,91,0.35)",
                },
                transition: "all 0.25s ease",
              }}
              onClick={() => formik.handleSubmit()}
            >
              Log In!
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pt: 1,
                borderTop: "1px solid #F0F2F8",
              }}
            >
              <Typography sx={{ color: "#8896B3", fontSize: 13 }}>
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  underline="hover"
                  sx={{ color: "#1A56FF", fontWeight: 700 }}
                >
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
