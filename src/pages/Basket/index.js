import React from "react";
import Footer from "../../component/Footer";
import LogCard from "../../component/LogCard";
import Navbar from "../../component/Navbar";
import css from "./style.module.css";

const Basket = () =>{
    return(
        <div>
            <div className={css.Navbar}>
                <Navbar/>
            </div>
            <div className={css.Gap}> </div>
            <div className={css.NullContainer}>
                <p className={css.pg}>ТАНЫ САГС ХООСОН БАЙНА.</p>
                <button className={css.bttn}>Худалдан авалт хийх</button>
            </div>
            <div className={css.Container}>
                
            </div>
            <div>
                <p>ТАНЫ СҮҮЛД ҮЗСЭН НОМНУУД</p>
                <div className={css.LogCard}>
                    <LogCard/>
                    <LogCard/>
                    <LogCard/>
                    <LogCard/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Basket;