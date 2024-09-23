import React, { useContext } from "react";
import { ItemsContext } from "../../context/ItemsProvider";
import Item from "../Item/Item";

const ItemsList = () => {
  const { items, isLoadingContent } = useContext(ItemsContext);

  if (isLoadingContent) {
    return (
      <div className="animate-pulse flex flex-wrap gap-6 justify-center">
        <div className="w-full max-w-xs">
          <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl bg-gray-300" />
          <div className="mt-4 px-5 pb-5">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />
            <div className="h-6 bg-gray-300 rounded w-1/2 mb-4" />
            <div className="h-8 bg-gray-300 rounded w-full" />
          </div>
        </div>
        <div className="w-full max-w-xs">
          <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl bg-gray-300" />
          <div className="mt-4 px-5 pb-5">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />
            <div className="h-6 bg-gray-300 rounded w-1/2 mb-4" />
            <div className="h-8 bg-gray-300 rounded w-full" />
          </div>
        </div>
        <div className="w-full max-w-xs">
          <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl bg-gray-300" />
          <div className="mt-4 px-5 pb-5">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />
            <div className="h-6 bg-gray-300 rounded w-1/2 mb-4" />
            <div className="h-8 bg-gray-300 rounded w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5">
        {items.map((item) => (
          <Item
            key={item.id}
            title={item.title}
            img={item.pictures[0]}
            unit_price={item.unit_price}
            id={item.id}
            stock={item.stock}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          />
        ))}
      </div>
    </>
  );
};

export default ItemsList;
