import Button from "../Button/Button";
import style from "../Utilities/utilities.module.css";
import ChatIcon from "../../assets/icons/chat-dots-svgrepo-com.svg?react"
import CreateIcon from "../../assets/icons/172525_plus_icon.svg?react"
import BellIcon from "../../assets/icons/bell-svgrepo-com.svg?react"
import ProfileIcon from "../../assets/icons/profile-icon.svg?react"
import { useState } from "react";
const Utilities: React.FunctionComponent<{ toggleOpen?: () => void, buttonRef: React.RefObject<HTMLButtonElement | null> | undefined }> = ({ toggleOpen, buttonRef }) => {

    return <div className={style.utilities}>
        <Button><ChatIcon /></Button>
        <Button><CreateIcon /><p>Create</p></Button>
        <Button><BellIcon /></Button>
        <Button onClick={toggleOpen} ref={buttonRef}><ProfileIcon /></Button>
    </div >
}
export default Utilities;