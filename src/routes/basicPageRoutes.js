import React from "react";
import {Route, Routes} from "react-router-dom";
import {Head} from "../components/headerBasicPage/Header"
import {Countries} from "../pages/countriesPage/Countries";
import {Footer} from "../components/footer/Footer";
import {CountryInfoPage} from "../pages/countriesPage/countryInfoPage/CountryInfoPage";
import {Cities} from "../pages/citiesPage/Cities";
import {CityInfoPage} from "../pages/citiesPage/cityInfoPage/CityInfoPage";
import {Forum} from "../pages/forumPage/Forum";
import {LogInPage} from "../pages/profile/logInPage/LogInPage";
import {Profile} from "../pages/profile/Profile";
import {Universities} from "../pages/universitiesPage/Universities";
import {UniversityInfoPage} from "../pages/universitiesPage/universityInfoPage/UniversityInfoPage";

export const BasicPageRoutes = () =>{
    return(
        <React.Fragment>
            <Head/>
            <Routes>
                <Route path="/countries" element={<Countries/>}/>
                <Route path="/country" element={<CountryInfoPage/>}/>
                <Route path="/cities" element={<Cities/>}/>
                <Route path="/city" element={<CityInfoPage/>}/>
                <Route path="/universities" element={<Universities/>}/>
                <Route path="/university" element={<UniversityInfoPage/>}/>
                <Route path="/forum" element={<Forum/>}/>
                <Route path="/authorization" element={<LogInPage var={"login"}/>}/>
                <Route path="/registration" element={<LogInPage var={"reg"}/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
            <Footer/>
        </React.Fragment>
    )
}