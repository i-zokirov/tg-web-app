import { useTheme } from "@material-ui/core";
import { Box, Container, Typography } from "@mui/material";
import { useAppSelector } from "../redux/hooks";
import { makeStyles } from "@material-ui/core/styles";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
const useStyles = makeStyles((theme) => ({
    flexbox: {
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(0.5),
    },
}));
const Checkout = () => {
    const theme = useTheme();
    const classes = useStyles();
    const cartItems = useAppSelector((state) => state.cart.items);
    return (
        <Container
            style={{
                marginTop: theme.spacing(4),
                marginBottom: theme.spacing(4),
                height: "90vh",
                position: "relative",
            }}
        >
            <Typography variant="h5" gutterBottom>
                Checkout
            </Typography>

            <Box>
                {Object.values(cartItems).map(
                    ({ product, quantity }, index) => (
                        <Box key={index} className={classes.flexbox}>
                            <Typography variant="h6" gutterBottom>
                                {quantity}x {product.name}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                ${product.price * quantity}
                            </Typography>
                        </Box>
                    )
                )}
                <Box className={classes.flexbox}>
                    <Typography variant="h6">Delivery Fee:</Typography>
                    <Typography variant="h6">$ 0</Typography>
                </Box>
                <Box className={classes.flexbox}>
                    <Typography variant="h5">Total value:</Typography>
                    <Typography variant="h5">
                        $
                        {Math.floor(
                            Object.values(cartItems).reduce(
                                (acc, { product, quantity }) =>
                                    acc + product.price * quantity,
                                0
                            )
                        )}
                    </Typography>
                </Box>
            </Box>
            <hr />
            <Box>
                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            <PaymentOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Payment method</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                            Cash on delivery
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <LocationOnOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Address</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                            asdsadasdasd
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <PermIdentityOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Name</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                            Jon Doe
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <PhoneOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Phone</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                            5165151613165
                        </Typography>
                    </MenuItem>
                </MenuList>
            </Box>
        </Container>
    );
};

export default Checkout;
