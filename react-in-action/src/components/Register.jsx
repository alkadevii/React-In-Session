import Greeting from "./Greeting";
import Button from "./Button";
function Register(){
    const handleRegister = () =>{
        alert("Welcome! You clicked register");
    }
    return (
        <div>
            <h1>Register page</h1>
            <Button label="Register" onClick={handleRegister}/>
        </div>
    )
}

export default Register;