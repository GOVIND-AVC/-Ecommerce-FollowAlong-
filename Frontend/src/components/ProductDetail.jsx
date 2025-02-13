import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
    const { id } = useParams(); // Get the product ID from the URL
    console.log("Product ID:", id); // Debug log to check the product ID

    const [product, setProduct] = useState(null); // State to hold product data
    const [quantity, setQuantity] = useState(1); // Default quantity

    useEffect(() => {
        // Fetch product data from the backend
        axios.get(`http://localhost:8080/product/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error("Error fetching product data:", error);
            });
    }, [id]);

    const handleAddToCart = () => {
        // Logic to add the product to the cart
        console.log(`Added ${quantity} of ${product.productName} to cart.`);
        // Here you would typically update the cart state or make an API call
    };

    if (!product) return <div>Loading...</div>; // Loading state

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{product.productName}</h1>
            <img src={product.productImage} alt={product.productName} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
            <p style={{ fontSize: "18px", margin: "10px 0" }}>{product.productDescription}</p>
            <p style={{ fontSize: "20px", color: "#e60000", fontWeight: "bold" }}>Price: ₹{product.productPrice}</p>
            <label style={{ display: "block", marginTop: "10px" }}>
                Quantity:
                <input 
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={(e) => setQuantity(e.target.value)}
                    style={{ marginLeft: "10px", width: "50px" }}
                />
            </label>
            <button onClick={handleAddToCart} style={{ marginTop: "10px", padding: "10px 15px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductDetail;
