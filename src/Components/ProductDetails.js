import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const api_url = "https://fakestoreapi.com/products/";
  const [prodact, setProduct] = useState([]);
  const prams = useParams();

  useEffect(() => {
    fetch(`${api_url}/${prams.productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  });

  return (
    <>
      <div className="border col-6 m-auto mt-3 p-3 shadow-sm">
        <img src={prodact.image} alt="" style={{ width: "150px" }} />
        <h2> {prodact.title}</h2>
        <p> {prodact.description}</p>
        <h2> {prodact.price}</h2>
      </div>
    </>
  );
};

export default ProductDetails;
