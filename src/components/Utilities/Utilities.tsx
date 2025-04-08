import Button from "../Button/Button";
import style from "../Utilities/utilities.module.css";
import ChatIcon from "../../assets/icons/chat-dots-svgrepo-com.svg?react"
import CreateIcon from "../../assets/icons/172525_plus_icon.svg?react"
import BellIcon from "../../assets/icons/bell-svgrepo-com.svg?react"
const Utilities = () => {
    return <div className={style.utilities}>
        <Button><ChatIcon /></Button>
        <Button><CreateIcon /><p>Create</p></Button>
        <Button><BellIcon /></Button>
    </div>
}
export default Utilities;