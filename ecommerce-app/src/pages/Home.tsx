import { Container } from "@material-ui/core";
import ProductList from "../components/ProductList";
import products from "../dummy";

const Home = () => {
    return (
        <Container style={{ marginTop: "15px", marginBottom: "10vh" }}>
            <ProductList products={products} />
        </Container>
    );
};

export default Home;
