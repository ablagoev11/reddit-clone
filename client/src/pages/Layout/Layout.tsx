import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header"
import { useEffect, useRef } from "react";
import "../../assets/themes/dark-theme.css"
import "../../assets/themes/light-theme.css"
import "../../assets/vars.css"
import useIsOpen from "../../hooks/useOpened";

import style from "./layout.module.css"
const Layout = () => {
    const [ref, isOpen, handleOpen, toggleOpen, buttonRef] = useIsOpen<HTMLDivElement>();
    useEffect(() => {
        document.documentElement.className = 'dark';
    }, []);
    return <>
        <Header toggleOpen={toggleOpen} buttonRef={buttonRef} />
        <div className={style.container}>
            {isOpen && <div className={style.profile} ref={ref}><div>open Profileopen Profileopen Profileopen Profileopen</div><div>open Profileopen Profileopen Profileopen Profileopen</div><div>open Profileopen Profileopen Profileopen Profileopen</div><div>open Profileopen Profileopen Profileopen Profileopen</div></div>}
            <Outlet /></div>


    </>
}
export default Layout;