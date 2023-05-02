import { useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Grid, Typography, useTheme } from "@material-ui/core";
import { Product } from "../types";

import products from "../dummy";
import RatingStars from "../components/RatingStars";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cart/cartSlice";

const SingleProductPage = () => {
    const { productId } = useParams<{ productId: string }>();
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const [quantity, setQuantity] = useState(1);

    const product: Product = products.find((p) => p.id === productId)!;

    const handleQuantityChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const quantity = parseInt(event.target.value);
        setQuantity(quantity);
    };

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product }));
    };

    return (
        <Container
            style={{
                marginTop: theme.spacing(4),
                marginBottom: theme.spacing(4),
                height: "90vh",
                position: "relative",
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "100%" }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Price: ${product.price}
                    </Typography>
                    <RatingStars rating={product.rating} />
                    <Typography variant="subtitle1" gutterBottom>
                        {product.description}
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom>
                        {product.countInStock > 0
                            ? `In Stock: ${product.countInStock}`
                            : "Out of Stock"}
                    </Typography>
                    {product.countInStock > 0 && (
                        <div>
                            <label>
                                Quantity:
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    min={1}
                                    max={product.countInStock}
                                />
                            </label>
                            <button type="submit" onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                        </div>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
};

export default SingleProductPage;
