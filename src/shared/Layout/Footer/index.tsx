import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BookingLogo from "@/assets/bookingDayLogo.svg";
// import AppleStoreDownload from "@/assets/apple-store-download-white.png";
// import GooglePlayDownload from "@/assets/play-store-download-white.png";
import Image from "next/image";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";
import Link from "next/link";
// import AppleStoreLogo from "@/assets/applestore-logo.svg";
// import PlayStoreLogo from "@/assets/playstore-logo.svg";

const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "secondary.main",
        position: "relative",
        overflow: "hidden",
        padding: "1rem 0rem 2rem 0rem",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: { lg: "40%", md: "40%" },
          bottom: { sm: "5%", xs: "5%" },
          left: 0,
          fontSize: { xs: "5rem", md: "12rem", lg: "15rem" },
          fontWeight: 800,
          color: "#fff",
          whiteSpace: "nowrap",
          letterSpacing: "-0.05em",
          userSelect: "none",
          pointerEvents: "none",
          width: "200%",
          textAlign: "center",
          zIndex: 0,
          animation: "scrollWatermark 20s linear infinite",

          "@keyframes scrollWatermark": {
            from: {
              transform: "translateX(100%)",
            },
            to: {
              transform: "translateX(-100%)",
            },
          },
        }}
      >
        Trip Picks
      </Typography>
      <Box
        sx={{
          padding: {
            lg: "3.5rem 4rem 2rem 4rem",
            md: "3.5rem 4rem 2rem 4rem",
            sm: "1.5rem 1.19rem 2rem 1.19rem",
            xs: "1.5rem 1.19rem 2rem 1.19rem",
          },
          position: "relative",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            alignItems: "flex-start",
            // justifyContent: "space-between",
          }}
        >
          <Grid
            size={{ xs: 12, sm: 12, md: 4.3, lg: 4.3 }}
            sx={{
              display: "flex",
              justifyContent: {
                lg: "flex-start",
                md: "flex-start",
                sm: "flex-start",
                xs: "flex-start",
              },
            }}
          >
            <Box>
              <Stack sx={{ textAlign: "left" }}>
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  {/* <Image
                    src="/"
                    alt="Booking Logo"
                    style={{ width: matches ? "45%" : "45%" }}
                  /> */}
                </Grid>

                <Grid>
                  <Stack>
                    <Typography
                      sx={{
                        color: "#F3F4F6",
                        marginTop: "1rem",
                        fontSize: {
                          lg: "1.125em",
                          md: "1.125em",
                          sm: "1em",
                          xs: "1em",
                        },
                        textAlign: "left",
                      }}
                    >
                      A perfect place to plan your trips
                    </Typography>
                    <Typography
                      sx={{
                        color: "#F3F4F6",
                        marginTop: "0.5rem",
                        fontSize: {
                          lg: "0.875em",
                          md: "0.875em",
                          sm: "0.75em",
                          xs: "0.75em",
                        },
                        textAlign: "left",
                        width: { lg: "70%", md: "70%", sm: "90%", xs: "90%" },
                      }}
                    >
                      Explore beautiful heritage sites using Trip Picks.
                    </Typography>
                  </Stack>
                </Grid>

                {/* <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginTop: "2rem",
                  }}
                >
                  <Typography
                    sx={{
                      width: "42px",
                      height: "42px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF24",
                      marginRight: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    <Icon
                      icon="basil:instagram-outline"
                      width="24"
                      height="24"
                      color={theme.palette.primary.main}
                    />
                  </Typography>
                  <Typography
                    sx={{
                      width: "42px",
                      height: "42px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF24",
                      marginRight: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    <Icon
                      icon="basil:instagram-outline"
                      width="24"
                      height="24"
                      color={theme.palette.primary.main}
                    />
                  </Typography>
                  <Typography
                    sx={{
                      width: "42px",
                      height: "42px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF24",
                      marginRight: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    <Icon
                      icon="basil:instagram-outline"
                      width="24"
                      height="24"
                      color={theme.palette.primary.main}
                    />
                  </Typography>
                </Grid> */}

                <Grid
                  container
                  spacing={2}
                  sx={{
                    marginTop: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Grid
                    size={{ xs: 5, sm: 5, md: 4, lg: 4 }}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Button
                      sx={{
                        fontSize: "0.8em",
                        backgroundColor: "secondary.main",
                        color: "#fff",
                        borderRadius: "32px",
                        width: "141px",
                        padding: "1rem 0.875rem",
                      }}
                    >
                      Register
                    </Button>
                    {/* <Link href="#">
                      <Image
                        src={AppleStoreDownload}
                        alt="Download on the Apple Store"
                        style={{
                          width: matches ? "100%" : "90%",
                          cursor: "pointer",
                        }}
                      />
                    </Link> */}
                  </Grid>
                  <Grid
                    size={{ xs: 5, sm: 5, md: 4, lg: 4 }}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Button
                      sx={{
                        fontSize: "0.8em",
                        border: "1px solid #fff",
                        color: "#fff",
                        borderRadius: "32px",
                        width: "141px",
                        padding: "1rem 0.875rem",
                      }}
                    >
                      Login
                    </Button>
                    {/* <Link href="#">
                      <Image
                        src={GooglePlayDownload}
                        alt="Download on the Google Store"
                        style={{
                          width: matches ? "100%" : "90%",
                          cursor: "pointer",
                        }}
                      /> */}
                    {/* </Link> */}
                  </Grid>
                </Grid>
              </Stack>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 2, lg: 2 }}
            sx={{
              display: "flex",
              justifyContent: {
                lg: "center",
                md: "center",
                sm: "flex-start",
                xs: "flex-start",
              },
              padding: { sm: "1.5rem 0 0 0", xs: "1.5rem 0 0 0" },
            }}
          >
            <Box>
              <Stack>
                <Grid sx={{ marginBottom: "2rem" }}>
                  <Typography
                    sx={{
                      fontSize: "1em",
                      textAlign: "left",
                      color: "primary.main",
                    }}
                  >
                    Quick Links
                  </Typography>
                </Grid>
                <Grid sx={{ marginBottom: "1.5rem" }}>
                  <Typography
                    sx={{
                      fontSize: "0.8em",
                      textAlign: "left",
                      color: "primary.main",
                      cursor: "pointer",
                    }}
                  >
                    About Us
                  </Typography>
                </Grid>
                <Grid sx={{ marginBottom: "1.5rem" }}>
                  <Typography
                    sx={{
                      fontSize: "0.8em",
                      textAlign: "left",
                      color: "primary.main",
                      cursor: "pointer",
                    }}
                  >
                    How it works
                  </Typography>
                </Grid>
                <Grid sx={{ marginBottom: "1.5rem" }}>
                  <Typography
                    sx={{
                      fontSize: "0.8em",
                      textAlign: "left",
                      color: "primary.main",
                      cursor: "pointer",
                    }}
                  >
                    Blog
                  </Typography>
                </Grid>
                <Grid>
                  <Typography
                    sx={{
                      fontSize: "0.8em",
                      textAlign: "left",
                      color: "primary.main",
                      cursor: "pointer",
                    }}
                  >
                    Careers
                  </Typography>
                </Grid>
              </Stack>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 2, lg: 2 }}
            sx={{
              display: "flex",
              justifyContent: {
                lg: "center",
                md: "center",
                sm: "flex-start",
                xs: "flex-start",
              },
              padding: { sm: "1.5rem 0 0 0", xs: "1.5rem 0 0 0" },
            }}
          >
            <Box>
              <Stack>
                <Grid sx={{ marginBottom: "2rem" }}>
                  <Typography
                    sx={{
                      fontSize: "1em",
                      textAlign: "left",
                      color: "primary.main",
                    }}
                  >
                    Support
                  </Typography>
                </Grid>
                <Grid sx={{ marginBottom: "1.5rem" }}>
                  <Typography
                    sx={{
                      fontSize: "0.8em",
                      textAlign: "left",
                      color: "primary.main",
                      cursor: "pointer",
                    }}
                  >
                    Help Center
                  </Typography>
                </Grid>
                <Grid sx={{ marginBottom: "1.5rem" }}>
                  <Typography
                    sx={{
                      fontSize: "0.8em",
                      textAlign: "left",
                      color: "primary.main",
                      cursor: "pointer",
                    }}
                  >
                    Terms & Conditions
                  </Typography>
                </Grid>
                <Grid sx={{ marginBottom: "1.5rem" }}>
                  <Typography
                    sx={{
                      fontSize: "0.8em",
                      textAlign: "left",
                      color: "primary.main",
                      cursor: "pointer",
                    }}
                  >
                    Privacy Policy
                  </Typography>
                </Grid>
                <Grid>
                  <Typography
                    sx={{
                      fontSize: "0.8em",
                      textAlign: "left",
                      color: "primary.main",
                      cursor: "pointer",
                    }}
                  >
                    Contact Us
                  </Typography>
                </Grid>
              </Stack>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 3.5, lg: 3.5 }}
            sx={{
              display: "flex",
              justifyContent: {
                lg: "flex-end",
                md: "flex-end",
                sm: "flex-start",
                xs: "flex-start",
              },
              padding: { sm: "1.5rem 0 0 0", xs: "1.5rem 0 0 0" },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Stack sx={{ width: "100%" }}>
                <Grid sx={{ marginBottom: "2rem" }}>
                  <Typography
                    sx={{
                      fontSize: "1em",
                      textAlign: "left",
                      color: "primary.main",
                    }}
                  >
                    Get in Touch
                  </Typography>
                </Grid>
                <Grid sx={{ marginBottom: "1.5rem" }}>
                  <Typography
                    sx={{
                      fontSize: "0.8em",
                      textAlign: "left",
                      color: "primary.main",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Icon
                      icon="f7:envelope"
                      width="24"
                      height="24"
                      style={{ marginRight: "0.5rem" }}
                    />
                    Support@Hourlystay.com44
                  </Typography>
                </Grid>
                <Grid
                  sx={{
                    marginBottom: "1.5rem",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.8em",
                      textAlign: "left",
                      color: "primary.main",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Icon
                      icon="fluent:call-20-filled"
                      width="24"
                      height="24"
                      style={{ marginRight: "0.5rem" }}
                    />
                    +91776970799
                  </Typography>
                </Grid>
                <Grid
                  container
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    // justifyContent: "space-between",
                  }}
                >
                  {/* <Grid
                    // size={{ xs: 5, sm: 5, md: 4, lg: 4 }}
                    sx={{
                      display: "flex",
                      width: {lg:"50%", md:"50%", xs:"50%", sm:"30%"},
                      marginRight: {
                        lg: "0rem",
                        md: "0rem",
                        sm: "0rem",
                        xs: "0rem",
                      },
                    }}
                  >
                    <Button
                      sx={{
                        border: "1px solid #fff",
                        padding: {
                          lg: "0.5rem 1rem",
                          md: "0.5rem 1rem",
                          sm: "0.5rem 1rem",
                          xs: "0.5rem 1rem",
                        },
                        display: "flex",
                        justifyContent: "flex-start",
                        color: "#fff",
                        borderRadius: "20px",
                      }}
                      startIcon={
                        <Image
                          src={AppleStoreLogo}
                          alt="applestore logo"
                          style={{
                            width: matches ? "26px" : "39px",
                            height: matches ? "26px" : "39px",
                          }}
                        />
                      }
                    >
                      <Stack sx={{ textAlign: "left" }}>
                        <Typography sx={{ fontSize: "0.8125em" }}>
                          Download on
                        </Typography>
                        <Typography
                          sx={{ fontWeight: 500, fontSize: "0.875em" }}
                        >
                          App Store
                        </Typography>
                      </Stack>
                    </Button>
                  </Grid> */}
                  <Grid sx={{ width: {lg:"50%", md:"50%", xs:"50%", sm:"30%"} }}>
                    <Button
                      sx={{
                        border: "1px solid #fff",
                        display: "flex",
                        justifyContent: "flex-start",
                        padding: {
                          lg: "0.5rem 1rem",
                          md: "0.5rem 1rem",
                          sm: "0.5rem 1rem",
                          xs: "0.5rem 1rem",
                        },
                        color: "#fff",
                        borderRadius: "20px",
                        // width: {
                        //   lg: "250px",
                        //   md: "220px",
                        //   sm: "180px",
                        //   xs: "180px",
                        // },
                      }}
                      // startIcon={
                      //   <Image
                      //     src={PlayStoreLogo}
                      //     alt="playstore logo"
                      //     style={{
                      //       width: matches ? "26px" : "39px",
                      //       height: matches ? "26px" : "39px",
                      //     }}
                      //   />
                      // }
                    >
                      <Stack sx={{ textAlign: "left" }}>
                        <Typography sx={{ fontSize: "0.8125em" }}>
                          Get it on
                        </Typography>
                        <Typography
                          sx={{ fontWeight: 500, fontSize: "0.875em" }}
                        >
                          Google Play
                        </Typography>
                      </Stack>
                    </Button>
                  </Grid>
                </Grid>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            marginTop: "3rem",
            borderTop: `1.5px solid #7B7B7B`,
          }}
        >
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Divider sx={{ borderColor: "primary.main" }} />
          </Grid>
        </Grid>

        <Grid container sx={{ marginTop: "3rem" }}>
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography
              sx={{
                fontSize: "1em",
                fontWeight: 400,
                textAlign: "center",
                color: "primary.main",
              }}
            >{`${dayjs().format("YYYY")} Trip Picks. All rights reserved`}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
