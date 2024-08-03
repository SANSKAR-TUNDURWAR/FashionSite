import React from "react";

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
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Slim kurta</p>
          <p className="opacity-70">Size, L White</p>
          <p className="opacity-70 mt-2">Seller:Christalio to fashion</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
