import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import ProductItem from "./ProductItem";

function Assignment2() {
  const [products, setProducts] = useState([
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Headphones", price: 3000 },
    { name: "Keyboard", price: 1500 },
  ]);

  const [searchText, setSearchText] = useState("");

  const searchRef = useRef(null);

  useEffect(() => {
    document.title = `Search: ${searchText}`;
  }, [searchText]);

  const focusSearch = () => {
    searchRef.current.focus();
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [products, searchText]);

  const totalPrice = useMemo(() => {
    return filteredProducts.reduce(
      (total, product) => total + product.price,
      0
    );
  }, [filteredProducts]);

  const removeProduct = useCallback((index) => {
    setProducts((prevProducts) =>
      prevProducts.filter((_, i) => i !== index)
    );
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Search and Price Calculator</h1>

      <input
        type="text"
        ref={searchRef}
        placeholder="Search Product"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <button
        onClick={focusSearch}
        style={{ marginLeft: "10px" }}
      >
        Focus Search
      </button>

      <h3>Total Price: ₹{totalPrice}</h3>

      <ul>
        {filteredProducts.map((product, index) => (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onRemove={removeProduct}
          />
        ))}
      </ul>
    </div>
  );
}

export default Assignment2;