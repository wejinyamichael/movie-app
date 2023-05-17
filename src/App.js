import "./App.css";
import React from "react";
import Footer from "./Components/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login_form from "./Components/Login_form.jsx";
import Signup_form from "./Components/Signup_form";
import Home from "./Components/Home";
import Subscribed from "./Components/Subscribed";
import Help_Form from "./Components/Help_Form";
import Subscribed_Main from "./Components/Subscribed_Main";
import Subscribed_Page from "./Components/Subscribed_Page";



function App() {
  
return (
  <>
  <div class="container">
    <div class="container2">
      <BrowserRouter>
      {/* <Subscribed /> */}
         <Routes>
           <Route path='/' element={<Home />} />
          <Route path='/login_form' element={<Login_form />} />
           <Route path='/home' element={<Home />} />
          <Route path='/subscribed' element={<Subscribed />} />
          <Route path='/signup_form' element={<Signup_form />} />
          <Route path='/help_form' element={<Help_Form />} />
          <Route path='/subscribed' element={<Subscribed_Main />} />
          <Route path='/subscribed' element={<Subscribed_Page />} />
        </Routes> 
        <Footer />
      </BrowserRouter>
    </div>
  </div>
</>
);
}
export default App;