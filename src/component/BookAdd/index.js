import React from "react";
import css from "./style.module.css";
const BookAdd = (props) => {
  return (
      <div className={css.ModalBackdrop}>
        <div className={css.ModalBox}>
        <div className={css.inputlName}>
                <strong className={css.label}>Номны нэр</strong>
                <input
                  className={css.input}
                  type="text"
                  placeholder=" Номны нэр"
                />
        </div>  
        <div className={css.inputfName}>
                <strong className={css.label}>Зохилч </strong>
                <input
                  className={css.input}
                  type="text"
                  placeholder=" Зохиолч"
                />
        </div>  
        <div className={css.inputName}>
                <strong className={css.label}>Төрөл </strong>
                <input
                  className={css.input}
                  type="text"
                  placeholder=" Төрөл"
                />
              </div>
        <div className={css.inputpass}>
                <strong className={css.label}>Нөөц </strong>
                <input
                  className={css.input}
                  type="text"
                  placeholder=" Нөөц"
                />
        </div>    
        <div className={css.inputpass}>
                <strong className={css.label}>Бүртгүүлсэн Огноо</strong>
                <input
                  className={css.input}
                  type="text"
                  placeholder="Бүртгүүлсэн Огноо "
                />
        </div>    
        
        <button className={css.button}  onClick={props.close}>
          Буцах
        </button>
        <button className={css.button} type="submit" onClick={props.close}>
          Хадгалах
        </button>


        </div>
      </div>

    
  );
};
export default BookAdd;
