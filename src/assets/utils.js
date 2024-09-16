export const filterData = (cartItems, searchTerm, sortOrder) => {
  return cartItems
    .filter((item) => {
      if (searchTerm === "") {
        return item;
      } else {
        return item.product.title.toLowerCase().includes(searchTerm);
      }
    })
    .sort((a, b) => {
      const priceA = a.total_price_in_shopping_cart.match(/\d+/);
      const priceB = b.total_price_in_shopping_cart.match(/\d+/);
      if (sortOrder === "ascAlpha") {
        return a.product.title.localeCompare(b.product.title);
      } else if (sortOrder === "desAlpha") {
        return b.product.title.localeCompare(a.product.title);
      } else if (sortOrder === "ascPrice") {
        return priceA - priceB;
      } else if (sortOrder === "desPrice") {
        return priceB - priceA;
      }
      return 0;
    });
};
