import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./Component/Nav.jsx";
import { Footer } from "./Component/Footer.jsx";
import Register from "./Component/Register.jsx";
import Login from "./Component/Login.jsx";
import Cart from "./Component/Cart.jsx";
import Shop from "./Component/Shop.jsx";
import About from "./Component/About.jsx";
import {Body} from "./Component/Body";
import {Profile} from "./Component/Profile.jsx";
import {Header} from "./Component/Header";
// import Data from "./Component/data";
import React,{useState,useEffect} from "react";
import {Api} from './Api'
import Single from "./Component/Single.jsx";



function App() {

  const [item, setItem] = useState([]);
    useEffect(()=>{
      fetch("http://127.0.0.1/ReactProject/project7/src/Component/shop.php")
      .then(res => res.json())
      .then(
        (result)=>{
          setItem(result);
        }
      )
    }, []);
    

  return (
    <React.Fragment>
    <BrowserRouter>
      <div className="site-wrap">
        <Nav />
        <Routes>
        <Route  path="/" element={<Body />} />
        <Route path="/weather" element={<Api />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop item={item}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/single-product/:id" element={<Single />} />

        </Routes>
        {/* <Data /> */}
        <Footer />
        
      </div> 



    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
