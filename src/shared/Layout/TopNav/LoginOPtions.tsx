import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
// import GoogleLogo from "@/assets/GoogleLogo.png";
// import AppleLogo from "@/assets/AppleLogo.png";
// import Image from "next/image";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

const LoginOPtions = ({ onClose }: any) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <Box sx={{ padding: "1rem 0.5rem" }}>
      <Grid
        container
        spacing={2}
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        {/* <Grid
          size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button
            startIcon={
              <Image
                src={GoogleLogo}
                alt="google-logo"
                width={30}
                height={30}
              />
            }
            sx={{
              fontSize: "0.8em",
              width: "100%",
              padding: "0.7rem 0",
              color: "#000",
              borderRadius: "32px",
              boxShadow: "0px 6px 15.5px 0px #ABABAB40",
              border: `0.5px solid #E1E4EA`,
            }}
            variant="outlined"
          >
            Continue with Google
          </Button>
        </Grid> */}
        {/* <Grid
          size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            // padding: "0.5rem 0",
          }}
        >
          <Button
            startIcon={
              <Image src={AppleLogo} alt="apple-logo" width={30} height={30} />
            }
            sx={{
              fontSize: "0.8em",
              width: "100%",
              padding: "0.7rem 0",
              color: "#000",
              borderRadius: "32px",
              boxShadow: "0px 6px 15.5px 0px #ABABAB40",
              border: `0.5px solid #E1E4EA`,
            }}
            variant="outlined"
          >
            Continue with Apple
          </Button>
        </Grid> */}
        <Grid
          size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            // padding: "0.5rem 0",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<Icon icon="bxs:envelope" width="24" height="24" />}
            sx={{
              fontSize: "0.8em",
              width: "100%",
              padding: "0.7rem 0",
              color: "#000",
              borderRadius: "32px",
              boxShadow: "0px 6px 15.5px 0px #ABABAB40",
              border: `0.5px solid #E1E4EA`,
            }}
            onClick={() => router.push("/login")}
          >
            Continue with Email
          </Button>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              my: 2,
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                height: "1px",
                backgroundColor: "paleBlue.main", // or any color like '#ccc'
              }}
            />
            <Typography
              sx={{
                px: 2,
                color: "text.secondary",
                fontSize: "0.875rem",
              }}
            >
              OR
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                height: "1px",
                backgroundColor: "paleBlue.main", // or any color like '#ccc'
              }}
            />
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "0.5rem 0",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              fontSize: "0.8em",
              width: "100%",
              padding: "0.7rem 0",
              color: "primary.main",
              borderRadius: "32px",
              backgroundColor: "#000",
            }}
            onClick={() => onClose(false)}
          >
            Continue as Guest
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginOPtions;
