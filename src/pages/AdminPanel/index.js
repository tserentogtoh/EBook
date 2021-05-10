import React, {Fragment}  from "react";
import {useState} from "react";
import css from "./style.module.css";
import BookCard from "../../component/Bookcard";
import Modal from "react-modal";
import BookAdd from "../../component/BookAdd";
const customStyles = {
    content: {
      left: "50%",
      top: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      height: "80%",
      boxShadow: "0 0 10px rgb(0, 0, 0, 0.25)",
    },
  };
  Modal.setAppElement("#root");
const AdminPanel = (props) =>{
    const [display, setDisplay] = useState(false);
    const close = () => {
    setDisplay(false);
  };
    return(
        <Fragment>
        <Modal
          isOpen={display}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => setDisplay(false)}
          style={customStyles}
        >
          <BookAdd close={close} />
        </Modal>
        <div className={css.Container}>
          {/* <div className={css.Nav}>
            <Navbar />
          </div> */}
          <div className={css.box}>
            <div className={css.TopContainer}>
              <div className={css.search}>
                <input
                  className={css.searchInput}
                  placeholder = "Хайлт хийх"
                  type="text"
                ></input>
              </div>
              <div className={css.add}>
                <button
                  onClick={() => setDisplay(true)}
                  className={css.Bttn}
                  type="submit"
                >
                    Ном нэмэх
                </button>
              </div>
              <div className={css.option}>
               
              </div>
            </div>
            <div className={css.middleContainer}>
              <div className={css.Text}>Номны Нэр</div>
              <div className={css.Text}>Зохилч</div>
              <div className={css.Text}>Төрөл</div>
              <div className={css.Text}>Нөөц</div>
              <div className={css.Text}>Бүртгүүлсэн Огноо</div>
            </div>
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
      </Fragment>
    )
}
export default AdminPanel;