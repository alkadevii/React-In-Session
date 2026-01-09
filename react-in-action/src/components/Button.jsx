function Button({onClick,label}){
    return (
    <button style={{backgroundColor:"blue",color:"white" }} onClick={onClick}>
        {label}
        </button>
    );

}

export default Button;