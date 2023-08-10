import React from "react";

interface CartHeaderType {}

const CartHeader: React.FC<CartHeaderType> = (props) => {
  return (
    <header className="bg-app-white flex justify-between px-8 py-4">
      <span className="font-bold uppercase text-lg">my bag</span>
      <span className="text-sm text-app-gray">
        Items are reserved for 60 minutes
      </span>
    </header>
  );
};

export default CartHeader;
