import {BrowserRouter, Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Header from 'blocks/Header';
import PrivateRoute from 'components/PrivateRoute';
import Footer from 'blocks/Footer';

import MainPage from 'pages/MainPage';
import Demo from 'pages/Demo';
import Search from 'pages/Search';

import Breeds from 'pages/breeds/Breeds';

import BreedsDetail from 'pages/breeds/BreedsDetail';

import Promos from 'pages/promo/Promos';
import PromosDetail from 'pages/promo/PromosDetail';


import Contacts from 'pages/Contacts';


import NotFound from 'pages/NotFound';





import Authorization from 'pages/cabinet/auth/Authorization';
import ForgotPassword from 'pages/cabinet/auth/ForgotPassword';
import Registration from 'pages/cabinet/auth/Registration';


import RedirectAccount from 'pages/cabinet/account/RedirectAccount';
import Account from 'pages/cabinet/account/Account';
import AccountEdit from 'pages/cabinet/account/AccountEdit';


import Cards from 'pages/cabinet/cards/Cards';
import CardsNew from 'pages/cabinet/cards/CardsNew';
import CardsEdit from 'pages/cabinet/cards/CardsEdit';

// Страницы Елементов Вакансии\ Резюме
import Catalog from 'pages/catalog/Catalog';
import CardsDetail from 'pages/catalog/CardsDetail';
// Страницы Елементов Вакансии\ Резюме

import GoMap from 'pages/goMap/GoMap';

import RulePublic from 'pages/RulePublic';
import PrivatePolicy from 'pages/PrivatePolicy';
import Usloviya from 'pages/Usloviya';


const App = () => {

  const ScrollToTop =(props) => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Header  />
                
        
        <Routes> 
          <Route path='/' exept element={<MainPage/>} ></Route>
          <Route path='/demo' element={<Demo/>} ></Route>

          <Route path='/porodi-:breedsCategory/' element={<Breeds/>} ></Route>
   
          <Route path='/porodi-:breedsCategory/:breedsID.html' element={<BreedsDetail/>} ></Route>

          <Route path='/search' element={<Search/>} ></Route>
          <Route path='/contacts' element={<Contacts/>} ></Route>
          <Route path='/rule-public' element={<RulePublic/>} ></Route>
          <Route path='/privacy-policy' element={<PrivatePolicy/>} ></Route>
          <Route path='/usloviya' element={<Usloviya/>} ></Route>


          <Route path='/authorization'  element={<Authorization/>} ></Route>
          <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
          <Route path='/registration'  element={<Registration/>} ></Route>

        
          {/*  Страницы кабинет  */}
            <Route path='/cabinet/' element={<PrivateRoute/>}>
              <Route index  element={<RedirectAccount/>}></Route>
              <Route path='/cabinet/account/'  element={<Account/>}></Route>
    
              <Route path='/cabinet/account-edit/' element={<AccountEdit/>}></Route>

              <Route path='/cabinet/:rubricId' element={<Cards/>}></Route>
              <Route path='/cabinet/:rubricId-new' element={<CardsNew/>}></Route>
              <Route path='/cabinet/:rubricId-edit/:elementId' element={<CardsEdit/>}></Route>

            </Route> 
          {/*  Страницы кабинет  */}


          <Route path='/ads/'  element={<Promos/>}></Route>
          <Route path='/ads/:elementId'  element={<PromosDetail/>}></Route>

          <Route path='/pitomniki/'  element={<Catalog/>}></Route>
          <Route path='/pitomniki/:elementId' element={<CardsDetail/>}></Route>     

          <Route path='/pitomniki/map' element={<GoMap/>}></Route>
          <Route path='/pitomniki/map/:idPopup' element={<GoMap/>}></Route>


          <Route path='/catalog/:catagoryName'  element={<Catalog/>}></Route>
          <Route path='/catalog/:catagoryName/map' element={<GoMap/>}></Route>
          <Route path='/catalog/:catagoryName/map/:idPopup' element={<GoMap/>}></Route>
          <Route path='/catalog/:catagoryName/:elementId' element={<CardsDetail/>}></Route>

          <Route path="/404" element={ <NotFound /> } />

        </Routes>

        <Footer/>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
    </>
  );
}

export default App;
