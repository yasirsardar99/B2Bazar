import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Pages/Navbar'

import { Login, SignUp, Home, AddToCart, TopSales, Products, Productpage } from './Routes'

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        
        {/* <Route index element={<Navbar />}/> */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path="/top-sales" element={<TopSales />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Productpage" element={<Productpage />} />

      </Routes>
    
    </BrowserRouter>
  );
}


export default App;
