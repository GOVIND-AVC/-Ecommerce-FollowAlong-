const express = require('express');
const { userModel } = require('../model/user.model');
const { productModel } = require('../model/product.model');
const authMiddleware = require('../middleware/authentication');

const cartRouter = express.Router();

// Add product to cart
cartRouter.post('/add', authMiddleware, async (req, res) => {

    try {
        const { productId, quantity } = req.body;
        const userId = req.user;

        // Validate product exists
        const product = await productModel.findById(productId);
        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }

        // Find user and update cart
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        // Check if product already in cart
        const existingProductIndex = user.cart.findIndex(
            item => item.productId.toString() === productId
        );

        if (existingProductIndex !== -1) {
            // Update quantity if product exists
            user.cart[existingProductIndex].quantity += quantity;
        } else {
            // Add new product to cart
            user.cart.push({ productId, quantity });
        }

        await user.save();
        res.status(200).send({ message: 'Product added to cart', cart: user.cart });
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).send({ message: 'Error adding product to cart' });
    }
});

// Get cart products for user
cartRouter.get('/products', authMiddleware, async (req, res) => {
    try {
        const user = await userModel.findById(req.user)

            .populate('cart.productId', 'name price image');
            
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        const cartProducts = user.cart.map(item => ({
            product: item.productId,
            quantity: item.quantity
        }));

        res.status(200).send(cartProducts);
    } catch (error) {
        console.error('Error fetching cart products:', error);
        res.status(500).send({ message: 'Error fetching cart products' });
    }
});

module.exports = { cartRouter };
