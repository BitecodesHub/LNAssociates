"use client";

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#E11D2A", dark: "#B3141F", contrastText: "#fff" },
    secondary: { main: "#0A0A0A" },
    background: { default: "#ffffff", paper: "#ffffff" },
    text: { primary: "#111113", secondary: "#6B7280" },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily:
      "var(--font-inter), ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 9999, paddingInline: 20, paddingBlock: 10 },
      },
    },
  },
});

export function MUIProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
