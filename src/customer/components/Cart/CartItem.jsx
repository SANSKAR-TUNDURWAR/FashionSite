import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
const CartItem = () => {
  return (
    <div className="p-5 border shadow-lg roundeed-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
          />
        </div>
        <div className="ml-5 space-y-1 text-left">
          <p className="font-semibold">Men Slim kurta</p>
          <p className="opacity-70">Size, L White</p>
          <p className="opacity-70 mt-2">Seller:Christalio to fashion</p>
          <div className="flex space-x-5 items-center  text-gray-900 mt-6 ">
            <p className="font-semibold ">$1999</p>
            <p className="opacity-50 line-through">$199</p>
            <p className="text-green-300 font-semibold">90%</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutline />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutline />
          </IconButton>
        </div>

        <div>
          <Button>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
