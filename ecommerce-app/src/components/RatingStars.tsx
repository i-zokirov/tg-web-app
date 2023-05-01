import React from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import { yellow } from "@material-ui/core/colors";
interface RatingStarsProps {
    rating: number;
}
const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    return (
        <>
            {[...Array(fullStars)].map((_, index) => (
                <StarOutlinedIcon key={index} style={{ color: yellow[700] }} />
            ))}
            {hasHalfStar && (
                <StarHalfOutlinedIcon style={{ color: yellow[700] }} />
            )}
            {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map(
                (_, index) => (
                    <StarBorderOutlinedIcon
                        key={index}
                        style={{ color: yellow[700] }}
                    />
                )
            )}
        </>
    );
};

export default RatingStars;
