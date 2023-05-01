import { Grid } from "@material-ui/core";
import { Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {products.map((product) => (
                <Grid
                    key={product.id}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
