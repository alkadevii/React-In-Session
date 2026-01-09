function Greeting(props){
    const isLoggedIn=true;

    if(isLoggedIn){
        return <div>Welcome User {props.name}</div>
    }
    return <div>You are not Logged in</div>
}

export default Greeting;