"use client";
import React, { useEffect, useState, type JSX } from "react";
import TopNavLogo from "@/assets/bookingDayLogo.svg";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Container,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  Grid,
  Stack,
  Chip,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import USALogo from "@/assets/USA.png";
import BritishLogo from "@/assets/GBP.png";
import EuroLogo from "@/assets/EURO.png";
import NairaLogo from "@/assets/Nigeria-logo.svg";
import { useFormik } from "formik";
import ControlledSelect from "@/shared/ControlledComponents/ControlledSelect";
import { CurrencyCode, listOfCurrency } from "@/helpers/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import LoginOptionsModal from "@/shared/Modals/LoginOptionsModal";
import LoginOPtions from "./LoginOPtions";
import secureLocalStorage from "react-secure-storage";
import { useCurrency } from "@/hooks/useCurrency";

export default function TopNav(): JSX.Element {
  const router = useRouter();
  const pathName = usePathname();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallTwo = useMediaQuery("(max-width:800px)");
  const { selectedCurrency, setSelectedCurrency } = useCurrency();
  const [userDetails, setUserDetails] = useState<any>(null);

  const [openLoginOptions, setOpenLoginOptions] = useState(false);

  // Mobile drawer state
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Menu anchor state for desktop dropdowns
  const [anchorMenuIndex, setAnchorMenuIndex] = React.useState<number | null>(
    null,
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElOne, setAnchorElOne] = React.useState<null | HTMLElement>(
    null,
  );
  const open = Boolean(anchorEl);
  const openOne = Boolean(anchorElOne);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickOne = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElOne(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseOne = () => {
    setAnchorElOne(null);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      currency: selectedCurrency,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const currencyOptions = listOfCurrency?.map((singleCurr) => {
    return {
      value: singleCurr.val,
      label: singleCurr.desc,
    };
  });

  // const generateLogo = () => {
  //   switch (formik.values.currency) {
  //     case "USD":
  //       return USALogo;
  //     case "EUR":
  //       return EuroLogo;
  //     case "GBP":
  //       return BritishLogo;
  //     case "NGN":
  //       return NairaLogo;
  //     default:
  //       return USALogo;
  //   }
  // };

  const isLanding = pathName === "/";

  useEffect(() => {
    const storedUserDetails = secureLocalStorage.getItem("userDetails");
    setUserDetails(storedUserDetails);
  }, []);

  useEffect(() => {
    setSelectedCurrency(formik.values.currency as CurrencyCode);
  }, [formik.values.currency]);

  useEffect(() => {
    const storedCurrency = localStorage.getItem("currency");
    console.log("storedCurrency", storedCurrency);
    formik.setFieldValue("currency", storedCurrency);
  }, []);

  console.log("userDetails", userDetails);

  return (
    <div>
      <AppBar
        position={isLanding ? "absolute" : "static"}
        elevation={0}
        sx={{
          top: 0, // sticks to the top of the viewport on scroll
          zIndex: 100,
          padding: {
            lg: "0.5rem 3rem",
            md: "0.5rem 3rem",
            sm: "0.5rem 1.5rem",
            xs: "0.5rem 1rem",
            xl: "0.5rem 1rem",
          },
          backgroundColor: isLanding ? "transparent" : "secondary.main",
          backdropFilter: isLanding ? "none" : "blur(8px)",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            padding: "0rem 0rem",
          }}
        >
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
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Toolbar
              disableGutters
              sx={{
                width: "100%",
                backgroundColor: "transparent",
                //   boxSizing: "border-box",
              }}
            >
              {/* Logo (left) */}
              {/* <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mr: 6,
                flex: "0 0 auto",
              }}
            >
              <Image
                src={TopNavLogo}
                alt="booking-logo"
                style={{ cursor: "pointer", width: "60%" }}
              />
            </Box> */}

              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  // padding: "0 1rem",
                }}
              >
                <Grid
                  size={{ xs: 6, sm: 6, md: 2, lg: 2 }}
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                  onClick={() => router.push("/home")}
                >
                  <Typography
                    sx={{
                      fontSize: "1em",
                      textAlign: "left",
                      fontWeight: 600,
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    TRIP PICKS
                  </Typography>
                </Grid>
              </Grid>

              {/* Right: Sign up button or mobile menu icon */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 2,
                }}
              >
                {!isSmall ? (
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Grid
                      // size={{ xs: 6, sm: 6, md: 2, lg: 2 }}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        LinkComponent={Link}
                        href="/saved-activities"
                        sx={{
                          fontSize: "0.8em",
                          borderBottom:
                            pathName === "/saved-activities"
                              ? `1px solid ${theme.palette.primary.main}`
                              : "none",
                        }}
                      >
                        Saved Activities
                      </Button>
                    </Grid>
                    <Grid
                      // size={{ xs: 6, sm: 6, md: 3.5, lg: 3.5 }}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        LinkComponent={Link}
                        href="/plans"
                        sx={{
                          fontSize: "0.8em",
                          borderBottom:
                            pathName === "/plans"
                              ? `1px solid ${theme.palette.primary.main}`
                              : "none",
                        }}
                      >
                        Plans
                      </Button>
                    </Grid>
                    <Grid
                      // size={{ xs: 6, sm: 6, md: 2, lg: 2 }}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        icon="flowbite:user-solid"
                        width="22"
                        height="22"
                        color={theme.palette.primary.main}
                        style={{ marginLeft: "0.5rem" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "0.8em",
                          display: "flex",
                          alignItems: "center",
                          color: "#fff",
                        }}
                      >
                        {`${userDetails?.firstname || ""} ${userDetails?.lastname || ""}`}
                      </Typography>
                    </Grid>
                    <Grid
                      // size={{ xs: 6, sm: 6, md: 1.5, lg: 1.5 }}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        LinkComponent={Link}
                        href="/"
                        sx={{
                          fontSize: "0.8em",
                          borderBottom:
                            pathName === "/"
                              ? `1px solid ${theme.palette.primary.main}`
                              : "none",
                        }}
                        onClick={() => {
                          localStorage.clear();
                          secureLocalStorage.clear();
                        }}
                      >
                        Logout
                      </Button>
                    </Grid>
                    {/* <Grid
                      // size={{ xs: 6, sm: 6, md: 2, lg: 2 }}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "15%",
                        marginRight: "1rem",
                      }}
                    >
                      <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        sx={{
                          fontSize: "0.8em",
                          backgroundColor: "primary.main",
                          color: "black.main",
                          borderRadius: "30px",
                        }}
                        startIcon={
                          <Image
                            src={generateLogo()}
                            alt="usa-logo"
                            style={{
                              width: "70%",
                              height: "20%",
                              paddingLeft: "0.5rem",
                            }}
                          />
                        }
                      >
                        {formik.values.currency}
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        sx={{ "& .MuiPaper-root": { mt: "6px" } }}
                        slotProps={{
                          list: {
                            "aria-labelledby": "basic-button",
                          },
                          paper: {
                            sx: {
                              width: 220, // fixed width
                              maxWidth: 280,
                              padding: "0.7rem 1rem",
                              borderRadius: "15px",
                            },
                          },
                        }}
                      >
                        <ControlledSelect
                          formik={formik}
                          name="currency"
                          label="Currency"
                          options={currencyOptions}
                          borderRadiusVal="15px"
                        />
                      </Menu>
                    </Grid> */}
                  </Grid>
                ) : (
                  <>
                    <IconButton
                      size="large"
                      edge="end"
                      color="inherit"
                      aria-label="menu"
                      onClick={toggleDrawer(true)}
                      sx={{ color: "#fff" }}
                    >
                      <GiHamburgerMenu />
                    </IconButton>

                    <Drawer
                      anchor="left"
                      open={drawerOpen}
                      onClose={toggleDrawer(false)}
                    >
                      <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        //   onClick={toggleDrawer(false)}
                      >
                        <Box sx={{ p: 2 }}>
                          <Typography variant="h6">Menu</Typography>
                        </Box>
                        <Divider />
                        <List>
                          <ListItem disablePadding sx={{ padding: "0.5rem 0" }}>
                            <ListItemButton
                              LinkComponent={Link}
                              href="/saved-activities"
                            >
                              <ListItemText primary="Saved Activities" />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding sx={{ padding: "0.5rem 0" }}>
                            <ListItemButton LinkComponent={Link} href="/plans">
                              <ListItemText primary="Plans" />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding sx={{ padding: "0.5rem 0" }}>
                            <ListItemButton
                              LinkComponent={Link}
                              href="/"
                              onClick={() => {
                                localStorage.clear();
                                secureLocalStorage.clear();
                              }}
                            >
                              <ListItemText primary="Logout" />
                            </ListItemButton>
                          </ListItem>
                          {/* <ListItem disablePadding sx={{ padding: "1rem 0" }}>
                            <ListItemButton>
                              <Button
                                id="basic-button"
                                aria-controls={open ? "basic-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={handleClick}
                                sx={{
                                  fontSize: "0.8em",
                                  backgroundColor: "paleBlue.main",
                                  color: "primary.main",
                                  borderRadius: "30px",
                                  padding: "0.5rem",
                                  width:'200px'
                                }}
                                startIcon={
                                  <Image
                                    src={generateLogo()}
                                    alt="usa-logo"
                                    style={{
                                      width: "50px",
                                      height: "25px",
                                      paddingLeft: "0.5rem",
                                    }}
                                  />
                                }
                                // label={formik.values.currency}
                              >
                                {formik.values.currency}
                              </Button>
                              <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                  vertical: "bottom",
                                  horizontal: "right",
                                }}
                                transformOrigin={{
                                  vertical: "top",
                                  horizontal: "right",
                                }}
                                sx={{ "& .MuiPaper-root": { mt: "6px" } }}
                                slotProps={{
                                  list: {
                                    "aria-labelledby": "basic-button",
                                  },
                                  paper: {
                                    sx: {
                                      width: 220, // fixed width
                                      maxWidth: 280,
                                      padding: "0.7rem 1rem",
                                      borderRadius: "15px",
                                    },
                                  },
                                }}
                              >
                                <ControlledSelect
                                  formik={formik}
                                  name="currency"
                                  label="Currency"
                                  options={currencyOptions}
                                  borderRadiusVal="15px"
                                  borderVal="1px solid #000"
                                />
                              </Menu>
                            </ListItemButton>
                          </ListItem> */}
                        </List>
                        <Divider />
                      </Box>
                    </Drawer>
                  </>
                )}
              </Box>
            </Toolbar>
          </Box>
        </Box>
        <LoginOptionsModal
          open={openLoginOptions}
          onClose={setOpenLoginOptions}
          title="You're Almost There!"
          subTitle="Sign in to complete your booking or continue as a guest."
        >
          <LoginOPtions
            onClose={setOpenLoginOptions}
            userDetails={userDetails}
          />
        </LoginOptionsModal>
      </AppBar>
    </div>
  );
}
