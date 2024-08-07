import React from "react";
import Item from "../Item/Item";
import { ItemsContext } from "../../context/ItemsProvider";
import { useContext } from "react";

const ItemsList = () => {
  const { items, isLoading } = useContext(ItemsContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Items List</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {items.map((item, key) => (
          <Item
            key={key}
            title={item.title}
            img={item.image}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default ItemsList;
