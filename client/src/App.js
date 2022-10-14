import React from "react";
import {BrowserRouter , Route,Routes} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import NotFound from "./components/NotFound";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Activation from "./pages/Activation";
import Profiles from "./pages/Profiles";
import Hello from "./pages/Hello";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Header/>
      <main className="py-3">
        <Routes>
          <Route path="/" element={<HomePage/>}/>

       
          <Route path="/properties" element={<PropertiesPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profiles/>}/>
          <Route path="/hello" element={<Hello/>}/>
          <Route path="/activate/:uid/:token" element={<Activation/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>


      <ToastContainer theme="dark"/>
      </main>
      <Footer/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
