import React from "react";
import css from "./style.module.css";
import Back from "../../component/img/background.jpg";

const SignupPage = () =>{
    return(
        <>
            <div className={css.imageContainer}>
            <img className={css.img} src={Back} alt="right" />
        
            <div className={css.Layer}>
                <div className={css.form}>
                <strong className={css.nevtreh}>Нэвтрэх</strong>
                <div className={css.loginWindow}>
                    <div className={css.inputName}>
                    <strong className={css.label}>Таны ID </strong>
                    <input
                        className={css.input}
                        type="text"
                        placeholder=" Та нэвтрэх ID-аа бичнэ үү"
                    />
                    </div>
                    <div className={css.inputPass}>
                    <strong className={css.label}> Email</strong>
                    <input
                        className={css.input}
                        type="email"
                        placeholder=" Та email үгээ оруулна уу"
                    />
                    </div>
                    <div className={css.inputPass}>
                    <strong className={css.label}> Нууц үг </strong>
                    <input
                        className={css.input}
                        type="password"
                        placeholder=" Та нэвтрэх нууц үгээ оруулна уу"
                    />
                    </div>
                    <div className={css.buttonContainer}>
                    <button  className={css.bttn}>
                        Бүртгүүлэх
                    </button>
                    </div>
                </div>
                </div>
            </div>
    
            </div>
        </>
    )
}
export default SignupPage