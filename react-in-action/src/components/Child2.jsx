function Child2(props) {
  return (
    <button onClick={() => props.sendMessage("Hi Alka")}>
      Child 2 
    </button>
  );
}

export default Child2;