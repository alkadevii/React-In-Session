function Child(props) {
  return (
    <button onClick={() => props.sendMessage("Hi Parent")}>
      Child 1
    </button>
  );
}

export default Child;
