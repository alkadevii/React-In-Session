import ProductCard from "./ProductCard";
import products from "../data/ProductList.json";

function ProductCardList() {
  return (
    <div>
      <h2>Product List</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductCardList;
