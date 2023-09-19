import { Rating } from "@mui/material";

function RatingView({ value }) {
  return <Rating name="customized-10" value={value} max={10} />;
}

export default RatingView;
