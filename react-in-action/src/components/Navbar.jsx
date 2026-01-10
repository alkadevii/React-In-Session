import { Link } from "react-router-dom";
function Navbar(){
    return (
        <nav style={{display:"flex", gap:"50px"}}>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/products">Products</Link>
        </nav>
    );
}

export default Navbar;