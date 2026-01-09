import Greeting from "./Greeting";
import Button from "./Button";
function Register(){
    const handleRegister = () =>{
        alert("Welcome! You clicked register");
    }
    return <Button label="Register" onClick={handleRegister}/>
}

export default Register;