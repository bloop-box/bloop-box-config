import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

if (!container) {
    throw new Error("Root element missing");
}

const root = createRoot(container);

const theme = createTheme();

root.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider maxSnack={1}>
                <App />
            </SnackbarProvider>
        </ThemeProvider>
    </StrictMode>,
);
