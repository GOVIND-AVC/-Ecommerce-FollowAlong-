const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    cart: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'productCollection'
        },
        quantity: {
            type: Number,
            required: true
        }
    }]
})

const userModel=mongoose.model("usercollection",userSchema)
module.exports={userModel}
