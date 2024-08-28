import React from "react";
import Quantity from "./Quantity";

const QuantityCounter = ({
  quantity,
  handleMinusQuantity,
  handlePlusQuantity,
  stock,
}) => {
  return (
    <div className="flex flex-col flex-wrap justify-between">
      <div id="stock" className="flex flex-row items-center">
        <h4 className="font-thin mr-1">Stock total: </h4>
        <h4 className="font-thin">{stock} Unidades</h4>
      </div>
      <div id="cantidad" className="flex flex-row items-center">
        <div>
          <h4 className="font-thin mr-1">Cantidad : </h4>
        </div>
        <Quantity
          quantity={quantity}
          handleMinusQuantity={handleMinusQuantity}
          handlePlusQuantity={handlePlusQuantity}
        />
      </div>
    </div>
  );
};

export default QuantityCounter;
