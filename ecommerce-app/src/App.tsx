import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import BottomNav from "./components/BottomNavigation";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import theme from "./theme";
import "./App.css";
import { WebApp } from "./types";

declare global {
    interface Window {
        Telegram: {
            WebApp: WebApp;
        };
    }
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={{ position: "relative" }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                    <BottomNav />
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;
