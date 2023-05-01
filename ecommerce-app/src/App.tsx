import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import BottomNav from "./components/BottomNavigation";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import theme from "./theme";
import "./App.css";
import { WebApp } from "./types";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { setUser } from "./redux/features/telegram/telegramSlice";

declare global {
    interface Window {
        Telegram: {
            WebApp: WebApp;
        };
    }
}

function App() {
    const dispatch = useAppDispatch();
    const telegram = useAppSelector((state) => state.telegram);
    console.log(telegram);
    useEffect(() => {
        console.log(window.Telegram.WebApp);

        if (window.Telegram && window.Telegram.WebApp) {
            dispatch(
                setUser({
                    user: window.Telegram.WebApp.initDataUnsafe.user!,
                    token: window.Telegram.WebApp.initData,
                    chat: window.Telegram.WebApp.initDataUnsafe.chat,
                    query_id: window.Telegram.WebApp.initDataUnsafe.query_id,
                    chat_type: window.Telegram.WebApp.initDataUnsafe.chat_type,
                    chat_instance:
                        window.Telegram.WebApp.initDataUnsafe.chat_instance,
                    start_param:
                        window.Telegram.WebApp.initDataUnsafe.start_param,
                    can_send_after:
                        window.Telegram.WebApp.initDataUnsafe.can_send_after,
                })
            );
            console.log(window.Telegram.WebApp.themeParams);
        }
    }, []);

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
