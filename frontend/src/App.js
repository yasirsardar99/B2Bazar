import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// import Navbar from './Pages/Navbar'
// import { Login, SignUp, Home, Navbar, Productpage } from './Routes'
import { Login, SignUp, Home, AddToCart, Productpage } from './Routes'

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      {/* <Navbar/> */}
      <Routes>
        {/* <Route index element={<Navbar />}/> */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/Productpage"element={<Productpage />} />
        <Route path="/" element={<Home />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        
      </Routes>
    </BrowserRouter>
  );
}


export default App;
