import Button from "./Button";
function Login(){
    const handleLogin = () =>{
        alert("welcome! You clicked Login");
    }
    return <Button label="Login" onClick={handleLogin}/>
}

export default Login;

