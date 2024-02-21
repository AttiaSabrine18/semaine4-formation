// Product.js
import React from 'react';

const Product = ({ name, price, category,image }) => {
  return (
    <div>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Price:</strong> {price}</p>
      <p><strong>Category:</strong> {category}</p>
      <p><img src={image}/></p>
      <hr />
    </div>
  );
};

export default Product;
