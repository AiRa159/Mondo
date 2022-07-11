import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/home/Home";
import {Head} from "../components/headerMainPage/Head";
import {Footer} from "../components/footer/Footer";


export const MainPageRoutes = () =>{
    return(
     <React.Fragment>
         <Head/>
         <Routes>
             <Route exact path="/" element={<Home/>}/>
         </Routes>
         <Footer/>
     </React.Fragment>
    )
}