import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
<<<<<<< HEAD
// import Navbar from './Pages/Navbar'
import {Login, SignUp, Home, Navbar , Productpage } from './Routes' 
=======
import {Login, SignUp, Home, AddToCart} from './Routes'
>>>>>>> 6a04fd705ad79e3478cd47d99d70641d3d745b4d



function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    {/* <Navbar/> */}
      <Routes>
            {/* <Route index element={<Navbar />}/> */}
            <Route path="/login" element={<Login/>} />
            <Route path="/sign-up" element={<SignUp/>} />
<<<<<<< HEAD
            <Route path="/Productpage" element={<Productpage/>} />
=======
>>>>>>> 6a04fd705ad79e3478cd47d99d70641d3d745b4d
            <Route path="/" element={<Home/>} />
            <Route path="/add-to-cart" element={<AddToCart/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
