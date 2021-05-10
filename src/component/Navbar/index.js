import React from "react";
import css from "./style.module.css";

const Navbar = () =>{
    return(
        <div className={css.Container}>
            <div className = {css.inputSelect}>
                <label>Хайх</label>
                <select className ={css.select}  name="position" id="position" >
                <option className ={css.option} value="bookname">Номны нэр</option>
                <option className ={css.option} value="author">Зохиолч</option>
                <option className ={css.option} value="type">Төрөл</option>
                <option className ={css.option} value="factory">Үйлдвэр</option>
                </select>
            </div>
            <div className={css.search}>
                <input
                    className={css.input}
                    type="text"
                    placeholder="Та хайх зүйлээ оруулна уу..."
                ></input>
                <button type="submit" className={css.bttn}>
                    хайх
                    {/* <img className={css.img} src={searchIc} alt="s" /> */}
                </button>
             </div>
            <div className={css.bascket}>
                <button className={css.bttn}>
                    сагс
                </button>
            </div>
            <div className={css.lbtn}>
                <button className={css.logbttn}>
                    Нэвтрэх
                </button>
                <button className={css.logbttn}>
                    Бүртгүүлэх
                </button >
            </div>

        </div>
    );
} 

export default Navbar;