import React from "react"
import { Navbar, Item } from '../../components'
import { useSelector } from 'react-redux'


const Checkout = () => {

    const items = useSelector(state => state.products)

    return(

        <>
        <Navbar/>
        <h2>Im the checkout page</h2>

        </>

    )
}

export default Checkout