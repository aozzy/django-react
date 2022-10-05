import React from "react";
import {BrowserRouter , Route,Routes} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Header/>
      <main className="py-3">
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>

        </Routes>

        <Routes>
          <Route path="/properties" element={<PropertiesPage/>}></Route>
        </Routes>


      </main>
      <Footer/>
      </BrowserRouter>
      <ToastContainer/>
    </React.Fragment>
  );
}

export default App;
