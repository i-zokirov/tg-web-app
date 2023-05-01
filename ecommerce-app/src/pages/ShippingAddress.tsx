import {
    Grid,
    TextField,
    Typography,
    Button,
    useMediaQuery,
    useTheme,
    Container,
} from "@material-ui/core";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const ShippingAddress = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Container
            style={{
                marginTop: theme.spacing(4),
                marginBottom: theme.spacing(4),
                height: "90vh",
                position: "relative",
            }}
        >
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
                    Shipping Address
                </Typography>
            </Box>
            <form>
                <Grid container spacing={isSmallScreen ? 3 : 4}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="addressLine1"
                            name="addressLine1"
                            label="Address line 1"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="addressLine2"
                            name="addressLine2"
                            label="Address line 2"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Switch defaultChecked={false} />}
                            label="Save for future use."
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button
                            type="submit"
                            variant="outlined"
                            size="medium"
                            color="primary"
                            style={{ marginRight: "15px" }}
                        >
                            <Link to="/cart" style={{ textDecoration: "none" }}>
                                Cancel
                            </Link>
                        </Button>
                        <Button
                            type="submit"
                            variant="outlined"
                            size="medium"
                            color="primary"
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default ShippingAddress;
