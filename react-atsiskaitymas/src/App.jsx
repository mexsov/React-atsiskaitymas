import { useState } from "react";
import { BookRegistrationForm } from "./formPage";
import "./App.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ProductList } from "./productList";
import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "./navBar";
import { BookList } from "./homePage";
import { ReviewForm } from "./bookReview";


function App() {
 

  return (
    <>
    <NavigationBar/>
      <Routes>
      <Route path="/ProductList" element={<ProductList/>} />
      <Route path="/" element={<BookList/>} />
       <Route path="/BookRegistrationForm" element={<BookRegistrationForm/>} />
       <Route path="/ReviewForm" element={<ReviewForm/>} />
       
      </Routes>
      
      
    </>
  );
}

export default App;
