import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./Component/Nav.jsx";
import { Footer } from "./Component/Footer.jsx";
import Register from "./Component/Register.jsx";
import Login from "./Component/Login.jsx";
import Cart from "./Component/Cart.jsx";
import Shop from "./Component/Shop.jsx";
import About from "./Component/About.jsx";
import Home from "./Component/Home.jsx";
import Profile from "./Component/Profile.jsx";
import {Navigate} from 'react-router-dom';

function App() {

  
  return (
    <BrowserRouter>
      <div className="site-wrap">
        <Nav />
        <Routes>
        <Route  path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
