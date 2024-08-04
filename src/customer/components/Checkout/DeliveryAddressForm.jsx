import { Button, Grid } from "@mui/material";
import React from "react";
import AdressCard from "../AddressCard/AdressCard";

const DeliveryAddressForm = () => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          item
          className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer justify-center">
            <AdressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}></Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
