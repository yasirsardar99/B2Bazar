import React from 'react'
import "./../Style/Products.css"
import Navbar from "./../Pages/Navbar"

const Products = () => {
  return (
    <>
    <Navbar/>
    <div className='d-flex mx-4 algin-items-center'>
    <div className="product-img">
        <button className='btn btn-primary'> product image is here</button>
        </div>
        <div className="product-details">
        <button className='btn btn-primary'> product details is here</button>
        </div>
    </div>
    </>
  )
}

export default Products