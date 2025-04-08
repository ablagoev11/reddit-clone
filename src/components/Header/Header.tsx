import style from "./header.module.css";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import Utilities from "../Utilities/Utilities";
const Header: React.FunctionComponent = () => {
    return (<header className={style.header}>
        <Logo />
        <Search />
        <Utilities />
    </header>)
}
export default Header;