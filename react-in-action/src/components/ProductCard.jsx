function ProductCard({ title, price }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        width: "200px",
      }}
    >
      <h3>{title}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
}

export default ProductCard;
