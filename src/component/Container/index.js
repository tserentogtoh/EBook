import React from "react";
import css from "./style.module.css";
import ContainerItem from "../ContainerItem";


const Container = ()=>{
    return(
        <div>
          <h2 id ="type" className={css.type}>Шинэ</h2>
          <ContainerItem/>
        </div>
    );
}

export default Container