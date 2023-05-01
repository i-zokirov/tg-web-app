import {
    Container,
    Typography,
    Grid,
    Paper,
    Box,
    IconButton,
} from "@material-ui/core";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
    removeFromCart,
    updateQuantity,
} from "../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    productImage: {
        width: "100%",
        height: "auto",
        objectFit: "contain",
    },
    paper: {
        padding: theme.spacing(2),
    },
    productInfo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: 1,
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            marginLeft: theme.spacing(1),
        },
    },
}));

const Cart = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.items);

    const handleRemoveFromCart = (productId: string) => {
        dispatch(removeFromCart(productId));
    };

    const handleUpdateQuantity = (productId: string, quantity: number) => {
        dispatch(updateQuantity({ id: productId, quantity }));
    };

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Box
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                }}
            >
                <Link
                    to="/"
                    style={{
                        marginRight: "15px",
                    }}
                >
                    <ArrowBackOutlinedIcon />
                </Link>
                <Typography variant="h5" gutterBottom>
                    Shopping Cart
                </Typography>
            </Box>

            {Object.values(cartItems).map(({ id, product, quantity }) => (
                <Box mb={2} key={id}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={3}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className={classes.productImage}
                                />
                            </Grid>
                            <Grid item xs={6} sm={9}>
                                <div className={classes.productInfo}>
                                    <Typography variant="h5">
                                        Price: ${product.price}
                                    </Typography>
                                    <Box>
                                        <Typography variant="subtitle1">
                                            Quantity: {quantity}
                                        </Typography>

                                        <IconButton
                                            aria-label="remove"
                                            size="medium"
                                            onClick={() =>
                                                handleUpdateQuantity(
                                                    id,
                                                    quantity - 1
                                                )
                                            }
                                            disabled={quantity === 1}
                                        >
                                            <RemoveCircleOutlineOutlinedIcon fontSize="inherit" />
                                        </IconButton>

                                        <IconButton
                                            aria-label="add"
                                            size="medium"
                                            onClick={() =>
                                                handleUpdateQuantity(
                                                    id,
                                                    quantity + 1
                                                )
                                            }
                                            disabled={
                                                quantity ===
                                                product.countInStock
                                            }
                                        >
                                            <AddCircleOutlineOutlinedIcon fontSize="inherit" />
                                        </IconButton>
                                        <IconButton
                                            aria-label="delete"
                                            size="medium"
                                            onClick={() =>
                                                handleRemoveFromCart(id)
                                            }
                                        >
                                            <DeleteOutlinedIcon fontSize="inherit" />
                                        </IconButton>
                                    </Box>
                                </div>
                            </Grid>
                        </Grid>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="h6">{product.name}</Typography>
                        </Box>
                    </Paper>
                </Box>
            ))}
        </Container>
    );
};

export default Cart;
