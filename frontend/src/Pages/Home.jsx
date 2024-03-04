import React from 'react'
// import { useState, useEffect } from 'react';
import './../Style/Home.css'
import Carousel from './Carousel'
import {Navbar} from "./../../src/Routes.js"


const Home = () => {

  return (
    <>
    <Navbar/>
    <div className='caruosel  d-flex justify-content-center'>
    <Carousel/>
    </div>
    <div>

    </div>
    </>

  )
}

export default Home