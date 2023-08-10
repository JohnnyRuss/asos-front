import React from "react";

interface CartFooterType {}

const CartFooter: React.FC<CartFooterType> = (props) => {
  return (
    <footer className="flex flex-col gap-4">
      <div className="bg-app-white px-8 py-4 flex justify-end gap-8 uppercase font-bold text-lg">
        <span>sub total</span>
        <span>£82.00</span>
      </div>

      <div className="bg-app-white px-8 py-4 flex gap-8">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M247.42,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a8,8,0,0,0-8-8H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H41a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,247.42,117ZM184,88h34.58l9.6,24H184ZM24,72H168v64H24ZM72,208a16,16,0,1,1,16-16A16,16,0,0,1,72,208Zm81-24H103a32,32,0,0,0-62,0H24V152H168v12.31A32.11,32.11,0,0,0,153,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,184,208Zm48-24H215a32.06,32.06,0,0,0-31-24V128h48Z"></path>
          </svg>
        </span>
        <div className="flex flex-col gap-2">
          <span className="font-bold">FREE* STANDARD DELIVERY</span>
          <span className="text-sm">
            Faster delivery options available to most countries.
          </span>
          <span className="underline text-sm">More info</span>
        </div>
      </div>

      <span className="font-bold text-lg border-b border-b-app-dark-gray pb-4 mt-8">
        WONDERING WHERE YOUR ITEMS HAVE GONE?
      </span>

      <span className="text-sm mt-4">
        No worries – you'll find them in your Saved Items.
      </span>

      <button className="w-max py-3 px-8 border-2 border-app-dark-gray uppercase font-bold mt-2">
        view all saved items
      </button>
    </footer>
  );
};

export default CartFooter;
