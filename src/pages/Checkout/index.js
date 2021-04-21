import React, { useState, useEffect } from "react"
import { Navbar, CartItem } from '../../components'
import { useSelector } from 'react-redux'


const Checkout = () => {

    const cart = useSelector(state => state.cart)
    const [totalQuantity, setQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    console.log(cart)

    useEffect (() => {
        let quantity = 0
        let price = 0
        cart.forEach(item => {
         quantity += item.quantity
         price += item.price * item.quantity

        })
        setTotalPrice(price)
        setQuantity(quantity)
    }, [cart])

    return(

        <>

            <h1>Checkout</h1>
            <div className = "cartItems">
                {cart.map(item => <CartItem key={item.id} productData ={item}/>
                )}
            </div>
            <div className = "summary">
                <p>Total:</p>
                <p>Price: {totalPrice}</p>
                <p>Quantity: {totalQuantity}</p>
            </div>

        </>

    )
}

export default Checkout