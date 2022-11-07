import React, { useState } from "react";

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [isStockOnly, setIsStockOnly] = useState(false);

  return (
    <div>
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} isStockOnly={isStockOnly} onIsStockOnlyChange={setIsStockOnly} />
      <ProductTable products={products} filterText={filterText} isStockOnly={isStockOnly} />
    </div>
  );
}

function SearchBar({ filterText, isStockOnly, onFilterTextChange, onIsStockOnlyChange }) {
  return (
    <form>
      <input type="text" placeholder="search..." value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input type="checkbox" checked={isStockOnly} onChange={(e) => onIsStockOnlyChange(e.target.checked)} /> Only show products in stock
      </label>
    </form>
  );
}

function ProductTable({ products, filterText, isStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) return;
    if (isStockOnly && !product.stocked) return;

    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan={"2"}>{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name : <span style={{ color: "red" }}>{product.name}</span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default FilterableProductTable;
