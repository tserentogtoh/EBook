import React from "react";
import css from "./style.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import Card from "../Card";


const ContainerItem = ()=>{
    return(
        <ScrollAnimation
      animateIn={css.fadeIn}
      animateOut={css.fadeOut}
      offset={css.offset}
    >
      <div className={css.Container} id="added">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </ScrollAnimation>
    );
}

export default ContainerItem