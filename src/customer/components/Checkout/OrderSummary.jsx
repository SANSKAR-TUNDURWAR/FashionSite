import React from "react";
import AdressCard from "../AddressCard/AdressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";
const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border ">
        <AdressCard />
      </div>
      <div className="">
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {[1, 1, 1, 1].map((item) => (
              <CartItem />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[110vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="opacity-60 uppercase font-bold pt-4 pb-4">
                Price Details
              </p>
              <hr />
              <div>
                <div className="space-y-3 font-semibold ">
                  <div className="flex justify-between p-3 text-black pb-0">
                    <span>Price</span>
                    <span>$ 3434</span>
                  </div>

                  <div className="flex justify-between p-3 text-black pb-0">
                    <span>Discount</span>
                    <span className="text-green-500">$ 3434</span>
                  </div>
                  <div className="flex justify-between p-3 text-black pb-0">
                    <span>Delivery Charges</span>
                    <span className="text-green-500">Free</span>
                  </div>
                  <div className="flex justify-between p-3 text-black pb-0">
                    <span className="font-bold">Total Amount</span>
                    <span className="text-green-500">$ 3434</span>
                  </div>
                </div>
                <div className="mt-10 ">
                  <Button
                    className="w-full"
                    variant="contained"
                    sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}
                  >
                    Check Out
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
