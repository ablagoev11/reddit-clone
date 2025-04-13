import React from "react";
import style from "./modal.module.css"
import Button from "../Button/Button";
import ClearIcon from "../../assets/icons/clear-circle-svgrepo-com.svg?react"
const Modal: React.FunctionComponent<{ children?: React.ReactNode, toggleOpen?: () => void, modalRef: React.RefObject<HTMLDivElement | null> | undefined }> = ({ children, toggleOpen, modalRef }) => {
    return (<div className={style.container} >
        <div className={style.modal} ref={modalRef}>
            <div className={style.close}><Button onClick={toggleOpen}><ClearIcon /></Button ></div>

            {children}
            Something
        </div>
    </div >)

}
export default Modal;