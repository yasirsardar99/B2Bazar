import React from 'react'
// import {Navbar} from "./../Routes.js"
import {OrderSummary} from "./../Routes.js" 
import {NavbarOfCart} from "./../Routes.js"

const AddToCart = () => {
  return (

    <div className="checkout-page">
        <NavbarOfCart />

        
         <div className="order-summary">
                <OrderSummary />
         </div>
    </div>
  )
}
export default AddToCart