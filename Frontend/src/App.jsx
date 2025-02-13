import Navbar from "./components/Navbar";
import Login from "./components/Login";   
import SignUp from "./components/SignUp";                                                                    
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail"; // Import the ProductDetail component

import ProductForm from "./components/ProductForm";
import EditProduct from "./components/EditProduct";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/productForm" element={<ProductForm />} />
                <Route path="/editProduct/:id" element={<EditProduct />} />
                <Route path="/product/:id" element={<ProductDetail />} /> {/* Add route for ProductDetail */}

                <Route path="/product/:id" element={<ProductDetail />} /> {/* Add route for ProductDetail */}

            </Routes>
        </Router>
    );
}

export default App;
