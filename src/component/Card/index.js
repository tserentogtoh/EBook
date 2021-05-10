import React from "react";
import css from "./style.module.css";
import book1 from "../../component/img/book1.jpg"

const Card = (props) => {
  return (
    <div className={css.Main}>
      <div className={css.Container}>
        <div>
        <img className={css.img} src={book1} alt="f1" />
        </div>
        <div className={css.Text}>
          <p className ={css.author} id = "authorname">Кишими Ичиро ба бусад</p>
          <h2 className={css.BName} id = "BNaem">АД ҮЗЭГДЭХ ЗОРИГ </h2>
          <h3 className = {css.price} id = "price"> 21000₮</h3>
        </div>
        
      </div>
      <button className={css.BasketBtn}>Сагсанд хийх</button>
    </div>
  );
};
export default Card;