import React from "react";

interface ShoppingCardType {}

const ShoppingCard: React.FC<ShoppingCardType> = (props) => {
  return (
    <main className="min-h-[35vw] flex">
      <div className="flex-1 bg-blue-500">
        <header></header>
        <ul className="flex flex-col">
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
          <li>
            <div>item</div>
          </li>
        </ul>
      </div>
      <aside className="w-80 sticky z-30 top-[85px] self-start bg-red-500">
        checkout
      </aside>
    </main>
  );
};

export default ShoppingCard;
