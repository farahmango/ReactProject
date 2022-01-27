import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./Component/Nav";
import { Footer } from "./Component/Footer";
import Register from "./Component/Register.jsx";
import Login from "./Component/Login.jsx";
import Cart from "./Component/Cart.jsx";
import Shop from "./Component/Shop.jsx";
import About from "./Component/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/register" element={<Register />} />
          {/* <Route  path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
