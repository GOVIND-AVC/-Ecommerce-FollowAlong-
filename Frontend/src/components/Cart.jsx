import PropTypes from 'prop-types';
import { Link } from "react-router-dom"; // Import Link for navigation

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cart = ({ product }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/editProduct/${product._id}`);
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (confirmDelete) {
            try {
                const response = await axios.delete(`http://localhost:8080/product/delete/${product._id}`);
                alert(response.data.message);
                // Optionally, you can refresh the cart or redirect after deletion
            } catch (error) {
                console.log(error);
            }
        }
    };

    const cartStyle = {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    };

    const imgStyle = {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "5px",
        marginBottom: "10px",
    };

    const h3Style = {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#333",
        margin: "10px 0",
    };

    const pStyle = {
        fontSize: "14px",
        color: "#555",
        marginBottom: "10px",
    };

    const priceStyle = {
        fontSize: "18px",
        color: "#e60000",
        fontWeight: "bold",
        marginBottom: "10px",
    };

    const buttonContainerStyle = {
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
        marginTop: "15px",
    };

    const buttonStyle = {
        flex: "1",
        padding: "8px",
        fontSize: "14px",
        color: "#333",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "white",
        cursor: "pointer",
    };

    const editButton = {
        flex: "1",
        padding: "8px",
        fontSize: "14px",
        color: "white",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "red",
        cursor: "pointer",
    };

    return (
        <div className="cart" style={cartStyle}>
            <img src={product.productImage} alt={product.productName} style={imgStyle} />
            <Link to={`/product/${product._id}`}>
                <h3 style={h3Style}>{product.productName}</h3> {/* Make product name clickable */}
            </Link>

            <p style={pStyle}>{product.productDescription}</p>
            <p style={priceStyle}>₹{product.productPrice}</p>
            <div style={buttonContainerStyle}>
                <button style={buttonStyle}>Add to Cart</button>
                <button style={buttonStyle}>Buy Now</button>
                <button style={buttonStyle}>Wishlist</button>
                <button style={editButton} onClick={handleClick}>Edit</button>
                <button style={editButton} onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

Cart.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired, // Added validation for _id

        productImage: PropTypes.string.isRequired,
        productName: PropTypes.string.isRequired,
        productDescription: PropTypes.string,
        productPrice: PropTypes.number.isRequired,
    }).isRequired,
};

export default Cart;
