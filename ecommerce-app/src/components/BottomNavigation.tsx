import * as React from "react";
import Box from "@mui/material/Box";
import { BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useLocation, useNavigate } from "react-router-dom";

const BottomNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [value, setValue] = React.useState(
        location.pathname === "/" ? "home" : location.pathname.split("/")[1]
    );
    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        navigate(`/${newValue}`);
    };

    return (
        <Box
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
            }}
        >
            <BottomNavigation showLabels value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Cart"
                    value="cart"
                    icon={<ShoppingCartOutlinedIcon />}
                />
                <BottomNavigationAction
                    label="Home"
                    value="home"
                    icon={<HomeOutlinedIcon />}
                />
                <BottomNavigationAction
                    label="My Profile"
                    value="profile"
                    icon={<AccountCircleOutlinedIcon />}
                />
            </BottomNavigation>
        </Box>
    );
};

export default BottomNav;
