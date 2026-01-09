import { useState } from "react";
import Child from "./Child";
import Child2 from "./Child2";

function Parent(){
    const [message,setMessage]=useState('');

    const showMessage=(msg) => {
        setMessage(msg);
    };

    return (
    <div>
      <h2>Parent Component</h2>
      <Child sendMessage={showMessage} />
      
      <Child2 sendMessage={showMessage} />
      <p>Message from child: {message}</p>

    </div>
  );

}
export default Parent;