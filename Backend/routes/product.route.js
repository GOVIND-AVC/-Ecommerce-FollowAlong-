const express = require("express");
const multer = require("multer");
const { productModel } = require("../model/product.model");

let productRouter = express.Router();

productRouter.get("/", async (req, res) => {
    try {
        const product = await productModel.find();
        res.send({ "message": "Successfully retrieved the data from database", data: product });
    } catch (error) {
        res.send({ "Error-message": error });
    }
});

productRouter.get("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        const product = await productModel.findById(id);
        res.send({ "message": "Successfully retrieved the data from database", data: product });
    } catch (error) {
        res.send({ "Error-message": error });
    }
});

productRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deletedProduct = await productModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).send({ "message": "Product Not found" });
        }
        res.status(200).send({ "message": "Successfully deleted the product", data: deletedProduct });
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
});

productRouter.put("/update/:id", async (req, res) => {
    const id = req.params.id;
    const { productName, productDescription, productPrice, productImages } = req.body;

    try {
        const updatedProduct = await productModel.findByIdAndUpdate(id, {
            productName,
            productDescription,
            productPrice,
            productImages
        }, { new: true });

        if (!updatedProduct) {
            return res.status(404).send({ "message": "Product Not found" });
        }
        res.status(200).send({ "message": "Successfully updated the product", data: updatedProduct });
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + "-" + file.originalname)
    }
});

const upload = multer({ storage: storage });

productRouter.post("/create", upload.array('productImage', 12), async (req, res) => {
    try {
        const { productName, productDescription, productPrice } = req.body;

        const imgPaths = req.files.map((file) => `/uploads/${file.filename}`);

        const newProduct = new productModel({
            productName,
            productDescription,
            productPrice,
            productImages: imgPaths
            // userEmail // Include userEmail in the new product
        });

        await newProduct.save();
        res.json({ "message": "Hurray! Successfully added the product to the database", product: newProduct });

    } catch (error) {
        console.log(error);
        res.json({ error });
    }
});

productRouter.put("/increase-quantity/:id", async (req, res) => {
    const id = req.params.id;
    const { quantity } = req.body;

    try {
        const updatedProduct = await productModel.findByIdAndUpdate(id, {
            $inc: { quantity: quantity }
        }, { new: true });

        if (!updatedProduct) {
            return res.status(404).send({ "message": "Product Not found" });
        }
        res.status(200).send({ "message": "Successfully increased the product quantity", data: updatedProduct });
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
});

productRouter.put("/decrease-quantity/:id", async (req, res) => {
    const id = req.params.id;
    const { quantity } = req.body;

    try {
        const updatedProduct = await productModel.findByIdAndUpdate(id, {
            $inc: { quantity: -quantity }
        }, { new: true });

        if (!updatedProduct) {
            return res.status(404).send({ "message": "Product Not found" });
        }
        res.status(200).send({ "message": "Successfully decreased the product quantity", data: updatedProduct });
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
});


module.exports={productRouter}
