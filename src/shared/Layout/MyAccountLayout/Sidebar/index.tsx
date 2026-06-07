"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
  AppBar,
  Toolbar,
} from "@mui/material";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import secureLocalStorage from "react-secure-storage";

const menuItems = [
  {
    label: "My account",
    icon: <Icon icon="mi:menu" width="24" height="24" />,
    path: "/my-account",
  },
  {
    label: "Favorites",
    icon: (
      <Icon
        icon="material-symbols-light:favorite-rounded"
        width="24"
        height="24"
      />
    ),
    path: "/my-account/favourites",
  },
  {
    label: "My reservations",
    icon: <Icon icon="solar:buildings-bold" width="24" height="24" />,
    path: "/my-account/my-reservations",
  },
  {
    label: "My Information",
    icon: <Icon icon="fluent:info-12-filled" width="24" height="24" />,
    path: "/my-account/my-information",
  },
  {
    label: "Change My Password",
    icon: <Icon icon="icon-park:change" width="24" height="24" />,
    path: "/my-account/change-my-password",
  },
];

function SidebarContent({
  selected,
  setSelected,
  onClose,
  isMobile,
  pathname,
}: any) {
  const router = useRouter()
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const storedUserData = secureLocalStorage.getItem("userData");

    setUserData(storedUserData);
  }, []);
  return (
    <Paper
      elevation={isMobile ? 0 : 3}
      sx={{
        width: 280,
        borderRadius: isMobile ? 0 : 3,
        overflow: "hidden",
        py: 2,
        height: isMobile ? "100%" : "auto",
        boxShadow: isMobile ? "none" : "0 8px 32px rgba(0,0,0,0.10)",
        position: "fixed",
        top: 90,
        left: 50,
        overflowY: "auto",
        zIndex: 100,
      }}
    >
      {/* Close button (mobile only) */}
      {isMobile && (
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", px: 1.5, pb: 0.5 }}
        >
          <IconButton onClick={onClose} size="small" sx={{ color: "#555" }}>
            <Icon icon="iconamoon:close-bold" width="24" height="24" />
          </IconButton>
        </Box>
      )}

      {/* User Profile Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: 2.5,
          pb: 2,
          pt: isMobile ? 0 : 1,
        }}
      >
        <Icon
          icon="solar:user-circle-bold"
          width="30"
          height="30"
          color="#4167FF"
          style={{ marginRight: "1rem" }}
        />
        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "0.97rem",
              color: "#1a1a2e",
              lineHeight: 1.3,
            }}
          >
            {`${userData?.firstname} ${userData?.lastname}`}
          </Typography>
          <Typography
            sx={{ fontSize: "0.75rem", color: "#888", lineHeight: 1.4 }}
          >
            {userData?.email}
          </Typography>
        </Box>
      </Box>

      <Divider />

      {/* Menu Items */}
      <List disablePadding sx={{ mt: 0.5 }}>
        {menuItems?.map((item) => {
          const isSelected = pathname === item.path;
          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                selected={isSelected}
                LinkComponent={Link}
                href={item.path}
                onClick={() => {
                  setSelected(item.label);
                  if (isMobile) onClose();
                }}
                sx={{
                  mx: 1,
                  my: 0.25,
                  borderRadius: 2,
                  px: 1.5,
                  py: 1.1,
                  position: "relative",
                  "&.Mui-selected": {
                    bgcolor: "#f0f3ff",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      right: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 4,
                      height: "60%",
                      bgcolor: "#3b5bdb",
                      borderRadius: "4px 0 0 4px",
                    },
                  },
                  "&:hover": { bgcolor: "#f5f7ff" },
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: 36, color: isSelected ? "#3b5bdb" : "#555" }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "0.9rem",
                    fontWeight: isSelected ? 600 : 500,
                    color: isSelected ? "#3b5bdb" : "#333",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Divider sx={{ mt: 1 }} />

      {/* Bottom Links */}
      <List disablePadding sx={{ mt: 0.5 }}>
        {["How does it work?", "Log Out"].map((label) => (
          <ListItem key={label} disablePadding>
            <ListItemButton
              sx={{
                mx: 1,
                my: 0.25,
                borderRadius: 2,
                px: 1.5,
                py: 1,
                "&:hover": { bgcolor: "#f5f7ff" },
              }}
            >
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#333",
                }}
                onClick={() => {
                  if (label === "Log Out") {
                    secureLocalStorage.clear();
                    localStorage.clear();
                    router.push("/login");
                  }else{
                    router.push("/how-it-works");
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default function UserSidebar() {
  const [selected, setSelected] = useState("My account");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        minHeight: { lg: "100vh", md: "100vh", sm: "0vh", xs: "0vh" },
        bgcolor: "#fff",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* AppBar — visible only on mobile */}
      {isMobile && (
        <AppBar
          position="fixed"
          elevation={1}
          sx={{
            bgcolor: "#fff",
            color: "#1a1a2e",
            boxShadow: "0 1px 8px rgba(0,0,0,0.08)",
          }}
        >
          <Toolbar sx={{ minHeight: 56 }}>
            <IconButton
              edge="start"
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "#3b5bdb", mr: 1 }}
            >
              <Icon icon="mi:menu" width="24" height="24" />
            </IconButton>
            <Typography
              sx={{ fontWeight: 700, fontSize: "1rem", color: "#1a1a2e" }}
            >
              My Profile
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Page body */}
      <Box
        sx={{
          display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
          alignItems: isMobile ? "flex-start" : "flex-start",
          justifyContent: "center",
          pt: isMobile ? 6 : 0,
          minHeight: { lg: "100vh", md: "100vh", sm: "0vh", xs: "0vh" },
          ml: isMobile ? 0 : "280px",
        }}
      >
        {/* Desktop: static inline sidebar */}
        {!isMobile && (
          <SidebarContent
            selected={selected}
            setSelected={setSelected}
            pathname={pathname}
            onClose={() => {}}
            isMobile={false}
          />
        )}

        {/* Mobile: sidebar lives inside a Drawer */}
        {isMobile && (
          <>
            {/* <Typography sx={{ color: "#bbb", fontSize: "0.875rem" }}>
              Tap ☰ to open the menu
            </Typography> */}
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{ sx: { width: 280, bgcolor: "#fff" } }}
            >
              <SidebarContent
                selected={selected}
                setSelected={setSelected}
                pathname={pathname}
                onClose={() => setDrawerOpen(false)}
                isMobile={true}
              />
            </Drawer>
          </>
        )}
      </Box>
    </Box>
  );
}
