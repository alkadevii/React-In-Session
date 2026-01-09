function ProductCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        width: "200px",
      }}
    >
      <h3>{props.title}</h3>
      <p>Price: ₹{props.price}</p>
    </div>
  );
}

export default ProductCard;
