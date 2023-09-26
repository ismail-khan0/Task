import React, { useState } from "react";
import ImageComponent from "./ImageComponent";
import image1 from "../img/first.jpeg";
import image2 from "../img/second.jpeg";
import image3 from "../img/three.jpeg";

function Dropdown() {
  const [items, setItems] = useState([
    { src: image1, name: "Google pixle", originalPrice: 10, quantity: 1 },
    { src: image2, name: "I phone", originalPrice: 20, quantity: 1 },
    { src: image3, name: "Samsung", originalPrice: 30, quantity: 1 },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const setDecrease = (index) => {
    const newItems = [...items];
    const item = { ...newItems[index] };
    item.quantity = item.quantity > 1 ? item.quantity - 1 : 1;
    newItems[index] = item;
    setItems(newItems);
  };

  const setIncrease = (index) => {
    const newItems = [...items];
    const item = { ...newItems[index] };
    item.quantity += 1;
    newItems[index] = item;
    setItems(newItems);
  };

  const total = items.reduce(
    (acc, item) => acc + item.originalPrice * item.quantity,
    0
  );

  return (
    <div className="dropdown mt-4 ml-16 ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-trigger bg-[#FFA500] flex justify-center  w-[200px] h-10 cursor-pointer items-center text-black"
      >
        Select an items
      </div>

      {isOpen && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <ImageComponent
              key={index}
              src={item.src}
              name={item.name}
              price={item.originalPrice}
              Qty={item.quantity}
              setDecrease={() => setDecrease(index)}
              setIncrease={() => setIncrease(index)}
            />
          ))}
        </div>
      )}
      {isOpen && (
        <div className="lg:ml-[63%] ml-[20%] mt-10 lg:mt-0 flex flex-col">
          <div className="w-20 h-[2px] mb-2 bg-black "></div>
          <div>
            {" "}
            <span className="font-bold text-lg">Total: </span> ${total}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
