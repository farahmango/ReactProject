import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./Component/Nav.jsx";
import { Footer } from "./Component/Footer.jsx";
import Register from "./Component/Register.jsx";
import Login from "./Component/Login.jsx";
import Cart from "./Component/Cart.jsx";
import Shop from "./Component/Shop.jsx";
import About from "./Component/About.jsx";
import {Body} from "./Component/Body";
import Profile from "./Component/Profile.jsx";
import {Header} from "./Component/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="site-wrap">
        <Nav />
        <Routes>
        <Route  path="/" element={<Body />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
