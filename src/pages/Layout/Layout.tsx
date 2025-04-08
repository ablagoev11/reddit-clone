import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header"
import { useEffect } from "react";
import "../../assets/themes/dark-theme.css"
import "../../assets/themes/light-theme.css"
import style from "./layout.module.css"
const Layout = () => {
    useEffect(() => {
        document.documentElement.className = 'dark';
    }, []);
    return <>
        <Header />
        <Outlet />
    </>
}
export default Layout;