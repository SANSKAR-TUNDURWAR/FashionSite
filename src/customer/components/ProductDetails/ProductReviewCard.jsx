import { Avatar, Grid, Rating } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3} textAlign={"left"}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              sx={{
                width: 56,
                height: 56,
                bgcolor: "#f3e8ff",
                color: "#9155fd",
              }}
            >
              R
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Ram</p>
              <p className="opacity-55">20 April, 2023</p>
            </div>
          </div>
          <Rating value={4.6} name="Half Rating" readOnly precision={0.1} />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
