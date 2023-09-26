import React from "react";

function ImageComponent({ src, name, price, Qty, setDecrease, setIncrease }) {
  return (
    <div className="flex justify-between w-[70%] items-center flex-col flex-wrap lg:flex-row ">
      <div className="flex flex-row mt-4 rounded-lg lg:w-[35%] w-full md:w-[25%]  justify-between">
        <div>
          <img
            src={src}
            alt={name}
            className="w-[70px] h-[70px] lg:w-[200px] lg:h-[180px]"
          />
        </div>
        <div className="flex-col ml-0 lg:ml-4 mt-4 flex items-end">
          <h2 className="text-xl font-semibold ml-6">{name}</h2>
          <p className="  mt-2 ">Price: ${price}</p>
        </div>
      </div>

      <div className="right flex  flex-row lg:mt-0 mt-6">
        <div>
          <button
            className="text-xl font-semibold"
            onClick={(e) => {
              e.preventDefault();
              setDecrease();
            }}
          >
            -
          </button>
        </div>
        <p className="mx-12 font-bold text-lg">
          <span className="text-lg font-normal">Qty:</span> {Qty}
        </p>

        <div>
          <button
            className="text-xl font-semibold"
            onClick={(e) => {
              e.preventDefault();
              setIncrease();
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageComponent;
