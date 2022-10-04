import React from "react"
import "antd/dist/antd.css";
import { Layout } from "antd";
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/common/Footer"
import Header from "./components/common/Header";
import HomePage from "./pages/HomePage";
import PropertyListPage from "./pages/PropertyListPage";
// const {Content, Header,Footer} = Layout

function App() {
  return (
    <Router>
      <Layout className="main-layout">
        <Layout.Header>
          <Header/>
        </Layout.Header>
        <Layout.Content>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/properties' component={PropertyListPage}/>
        </Layout.Content>
        <Layout.Footer>
          <Footer/>
        </Layout.Footer>

      </Layout>
    </Router>
  );
}

export default App;
