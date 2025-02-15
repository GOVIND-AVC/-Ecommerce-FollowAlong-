import { Link, useNavigate } from 'react-router-dom';

const navBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor:"#fcaa49",
    color: "white",
    position: "sticky",
    top: "0",
    width: "100%",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
    zIndex: 10,
};

const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    cursor: "pointer",
};

const linkContainerStyle = {
    display: "flex",
    gap: "20px",
};

const linkStyle = {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
};

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav style={navBarStyle}>
            <div style={logoStyle} onClick={() => navigate("/")}>
                E-Commerce
            </div>
            <ul style={linkContainerStyle}>
                <li><Link to="/" style={linkStyle}>Home</Link></li>
                <li><Link to="/my-products" style={linkStyle}>My Products</Link></li>
                <li><Link to="/productForm" style={linkStyle}>Add Product</Link></li>
                
                <li><Link to="/cart" style={linkStyle}>Cart</Link></li>
                <li><Link to="/signup" style={linkStyle}>Sign Up</Link></li>
                <li><Link to="/login" style={linkStyle}>Login</Link></li>
            </ul>
        </nav>
    );
};



export default Navbar;
