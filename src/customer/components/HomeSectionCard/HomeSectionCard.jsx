import React from "react";
import Men1 from "../../../images/Mens/men1.jpg";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-column flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] m-3">
      <div className="h-[13rem] w-[10rem] flex flex-col">
        <img
          className="object-cover object-top h-[200px]"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
