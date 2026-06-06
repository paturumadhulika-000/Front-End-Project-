import React from "react";

function ProductItem({ product, index, onRemove }) {
  return (
    <li>
      {product.name} - ₹{product.price}
      <button
        onClick={() => onRemove(index)}
        style={{ marginLeft: "10px" }}
      >
        Remove
      </button>
    </li>
  );
}

export default React.memo(ProductItem);