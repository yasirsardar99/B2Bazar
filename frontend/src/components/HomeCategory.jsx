import React from 'react'
import "./../Style/HomeCategory.css"

const HomeCategory = (props) => {
    const {category, thumbnail} = props.data;

  return (
    <div className="mx-2 p-2"> 
    <div className='d-flex flex-column justify-content-between category align-items-center text-center mx-4'>
    <img className='cat-img ' src={thumbnail} alt="" />
    <p className='cat-thumbnail'>{category}</p> 
    </div>       
    </div>
  )
}

export default HomeCategory