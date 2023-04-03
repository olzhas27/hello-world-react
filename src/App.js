import './App.css';
import {Route, Routes} from "react-router-dom";
import Success from "./pages/success/Success";
import React from "react";

function App() {
    return (
        <div className="App">
            <Routes>
                {/*<Route path="/" element={}/>*/}
                <Route path="/success" element={<Success/>}/>
            </Routes>
        </div>
    );
}

export default App;
