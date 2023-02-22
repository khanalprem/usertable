import React from "react"
import { Route, Routes } from "react-router";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Home,About,Services, Portfolio,Contact, ErrorPage,Teams,Users} from "./components/pages"

function App() {
  return (
    
      <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/teams" element={<Teams/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
      <Footer/>
      </>
    
    
  );
}

export default App;
