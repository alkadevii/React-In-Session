import Button from "./Button";
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate=useNavigate();

    const handleLogin = () =>{
        alert("welcome! You clicked Login");
        navigate("/username");
    }
    return (
        <div>
            <h1>Login Page</h1>
            <Button label="Login" onClick={handleLogin}/>

        </div>
    );
    
}

export default Login;

