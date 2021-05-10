import React from "react";
import css from "./style.module.css";
import Navbar from "../../component/Navbar"
import Container from "../../component/Container";
import Footer from "../../component/Footer";

const Homepage = () =>{
    return(
        <div className={css.Container}>
            <div className={css.Navbar}>
                <Navbar/>
            </div>
            <div className={css.Gap}>

            </div>
            <div className={css.Container}>
                <Container/>
                <Container/>
                <Container/>
                <Container/>
            </div>
            <Footer/>
            
        </div>
    );
} 

export default Homepage;