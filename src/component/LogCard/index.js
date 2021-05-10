import React from "react";
import css from "./style.module.css";
import book2 from "../../component/img/book2.jpg"

const LogCard = () =>{
    return(
        <div className = {css.Container}>
            <div>
            <img className={css.img} src={book2} alt="mrkr" />
            </div> 
            <p className={css.price}>19900₮</p>
        </div>
    );
}

export default LogCard;