import React from "react";
import Item from "../Item/Item";
import { ItemsContext } from "../../context/ItemsProvider";
import { useContext } from "react";

const ItemsList = () => {
  const { items, isLoadingContent } = useContext(ItemsContext);

  if (isLoadingContent) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5">
        {items.map((item, key) => (
          <Item
            key={key}
            title={item.title}
            img={item.pictures[0]}
            unit_price={item.unit_price}
            id={item.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          />
        ))}
      </div>
    </>
  );
};

export default ItemsList;
