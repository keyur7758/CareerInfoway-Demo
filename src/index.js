import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Home from './Home'
import Contact from './Contact'
import Footer from './Footer'
import Php from './Php';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Android from './Android';
import Seo from './Seo';
import Design from './Design';
import Net from './Net';
import Java from './Java';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Contact"  element={<Contact />} />
        <Route path="/PHP"  element={<Php />} />
        <Route path="/Android" element={<Android />} />
        <Route path="/Seo" element={<Seo />} />
        <Route path="/Design" element={<Design />} />
        <Route path="/Net" element={<Net/>}/>
        <Route path="/Java" element={<Java/>}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
