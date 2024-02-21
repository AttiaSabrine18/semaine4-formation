// ProductList.js
import React from 'react';
import Product from './Product';
const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          price={product.price}
          category={product.category}
          image={product.image}
        />
      ))}
    </div>
  );
};
export default ProductList;
