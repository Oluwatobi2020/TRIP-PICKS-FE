import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";
import { Box } from "@mui/material";
import StoreProvider from "@/shared/providers/StoreProviders";
import { UiTriggersProvider } from "@/context/UiTriggersContext";
import { CurrencyProvider } from "@/context/CurrencyContext";
import SnackbarProviders from "@/shared/providers/SnackbarProviders";
import Loader from "@/shared/Loader";

export const metadata: Metadata = {
  title: "Trip Picks",
  description: "Developed by Oluwatobi Ojedeji",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ width: "100%" }}>
        <StoreProvider>
        <UiTriggersProvider>
          <SnackbarProviders>
            <CurrencyProvider>
              <Loader />
              <Providers>{children}</Providers>
            </CurrencyProvider>
          </SnackbarProviders>
        </UiTriggersProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
