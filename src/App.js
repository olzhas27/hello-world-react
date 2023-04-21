import './App.css';
import {Route, Routes} from "react-router-dom";
import Success from "./pages/success/Success";
import React from "react";
import Checkout from "./pages/checkout/Checkout";
import Shop from "./pages/shop/Shop";

function App() {
    return (
        <div className="App">
            <Routes>
                {/*<Route path="/" element={}/>*/}
                <Route path="/success" element={<Success/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
        </div>
    );
}

export default App;
