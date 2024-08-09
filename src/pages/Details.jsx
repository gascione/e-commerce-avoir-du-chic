import { useContext } from "react";
import { ItemsContext } from "../context/ItemsProvider";
import { useParams } from "react-router-dom";

const Details = () => {
  const { itemId } = useParams();
  const { items, isLoading } = useContext(ItemsContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const item = items.find((item) => item.id === parseInt(itemId, 10));
  return (
    <div>
      <h4>{item.title}</h4>
    </div>
  );
};

export default Details;
