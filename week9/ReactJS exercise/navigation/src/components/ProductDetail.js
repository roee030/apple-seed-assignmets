import React from "react";
import data from "../data/store";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ProductDetail(props) {
  const { id } = useParams();
  const singleProductById = data.filter(
    (element) => element.id == props.match.params.id
  );
  console.log(id);

  return (
    <div className="cardContainer">
      <div className="productCard">
        <h1>{singleProductById[0].title}</h1>
        <h5>{singleProductById[0].size}</h5>
        <img src={singleProductById[0].imageUrl}></img>
        <h3>Price: ${singleProductById[0].price}</h3>
        <Link to="/products">Back to product page</Link>
      </div>
    </div>
  );
}
