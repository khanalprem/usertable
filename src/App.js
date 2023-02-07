import React from "react"
import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import { Home,About,Services, Portfolio,Contact} from "./components/pages"

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/portfolio" element={<Portfolio/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </>
  );
}

export default App;
