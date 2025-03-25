import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const Cart = () => {


    const [cartProduct,setCartProduct]=useState([])

    // const fetchProductData=(id)=>{
    //     fetch(`http://localhost:8080/product/${id}`).then((res)=>res.json())
    //     .then((res)=>{
    //         console.log(res,"h")
    //         setCartProduct([...cartProduct,res.data])
    //     }).catch(err=>{
    //         console.log(err);
    //     })
    // }

    const fetchCartData=()=>{
        fetch('http://localhost:8080/cart/products',{
            method:"GET",
            headers:{"Content-Type":"application/json",
                "authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            // console.log(res,"HH");
            setCartProduct(res)
            // res?.forEach(async(el)=>{
            // let id=el.product._id;
            // await fetchProductData(id)
            // })
            
        }).catch(err=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        fetchCartData()
    },[]);

    console.log(cartProduct,"gff")

  return (
    <>
        {cartProduct?.map(el=>
             <ProductCard className='cart-product-card' product={el.product} qty={el.quantity}></ProductCard>
        )}
    </>
  )
}

export default Cart