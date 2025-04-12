import style from "./header.module.css";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import Utilities from "../Utilities/Utilities";
import { useState } from "react";
const Header: React.FunctionComponent<{ toggleOpen?: (() => void), buttonRef: React.RefObject<HTMLButtonElement | null> | undefined }> = ({ toggleOpen, buttonRef }) => {

    return (<header className={style.header}>
        <Logo />
        <Search placeholder="Search Reddit">
            Hi hihihi
        </Search>
        <Utilities toggleOpen={toggleOpen} buttonRef={buttonRef} />
    </header>)
}
export default Header;