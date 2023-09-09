import React from "react";
import "./Product.css";
function Product(props) {
  return (
    <div className="card">
      <img src={props.url} alt="really_nice" className="product--image"></img>
      <h2 className="h2-product">{props.title}</h2>
      <p className="p-product">{props.description}</p>
      <button>
        <a href={props.git}>View On Github</a>{" "}
      </button>
    </div>
  );
}

export default Product;
