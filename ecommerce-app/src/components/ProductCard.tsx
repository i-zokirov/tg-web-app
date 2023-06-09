import React from "react";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "../types";
import { Link as RouterLink } from "react-router-dom";
import RatingStars from "./RatingStars";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cart/cartSlice";
interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { name, rating, image, id, numReviews, price } = product;

    const dispatch = useAppDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    $ {price}
                </Typography>
                <RatingStars rating={rating} />
                <Typography variant="body2" color="text.secondary">
                    {numReviews} reviews
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    variant="outlined"
                    startIcon={<ShoppingCartOutlinedIcon />}
                    onClick={handleAddToCart}
                >
                    Add
                </Button>
                <Button size="small">
                    <Link
                        to={`/products/${id}`}
                        underline="none"
                        component={RouterLink}
                    >
                        Read More
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
