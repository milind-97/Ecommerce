/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./StateProvider";
function Product({ title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket >>>", basket);
  const addToBasket = () => {
    // dispatch items into
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon />
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
