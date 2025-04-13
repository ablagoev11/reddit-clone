import style from "./header.module.css";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import Utilities from "../Utilities/Utilities";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { useState } from "react";
import useIsOpen from "../../hooks/useOpened";
const Header: React.FunctionComponent<{ toggleOpen?: (() => void), buttonRef: React.RefObject<HTMLButtonElement | null> | undefined }> = ({ toggleOpen, buttonRef }) => {
    const [modalRef, isOpen, handleOpen, toggleOpenModal] = useIsOpen<HTMLDivElement>();
    return (<header className={style.header}>
        <Logo />
        <Search placeholder="Search Reddit">
            Hi hihihi
        </Search>
        <div style={{ display: "flex" }}>
            {/*<Button onClick={handleOpen}>Log in</Button>*/}
            {isOpen && < Modal toggleOpen={toggleOpenModal} modalRef={modalRef} />}
            <Utilities toggleOpen={toggleOpen} buttonRef={buttonRef} />
        </div>
    </header>)
}
export default Header;