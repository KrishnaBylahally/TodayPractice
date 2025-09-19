import Home from "./pages/Home";
import React from "react";
import MyRouter from "./router/index"; 
import NavBar from "./component/Navbar";

function App() {
  return (
    <div>

      <NavBar/>

      <MyRouter/>

    </div>
  );
}

export default App;
