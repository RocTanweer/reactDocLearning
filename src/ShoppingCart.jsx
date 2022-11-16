import React, { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(id) {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, count: product.count + 1 };
      } else {
        return product;
      }
    });

    setProducts(newProducts);
  }

  function handleDecreaseClick(id) {
    const newProducts = products
      .map((product) => {
        if (product.id === id) {
          return { ...product, count: product.count - 1 };
        } else {
          return product;
        }
      })
      .filter((product) => product.count !== 0);
    setProducts(newProducts);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleDecreaseClick(product.id);
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ShoppingCart;
