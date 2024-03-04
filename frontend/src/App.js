import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {Login, SignUp, Home, AddToCart} from './Routes'



function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    {/* <Navbar/> */}
      <Routes>
            {/* <Route index element={<Navbar />}/> */}
            <Route path="/login" element={<Login/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/add-to-cart" element={<AddToCart/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
