import React from "react";
import css from "./style.module.css";
const BookCard = () => {
  return (
    <div className={css.middleContainer}>
      <div className={css.Text1}>АД ҮЗЭГДЭХ ЗОРИГ</div>
      <div className={css.Text}>Кишими Ичиро</div>
      <div className={css.Text1}>БЕСТСЕЛЛЕР</div>
      <div className={css.Text1}>123</div>
      <div className={css.Text1}>2021/03/25</div>
    </div>
  );
};
export default BookCard;