import { useState, useRef } from "react";
import style from "./search.module.css"
import SearchIcon from "../../assets/icons/search-svgrepo-com.svg?react";
import ClearTextIcon from "../../assets/icons/clear-circle-svgrepo-com.svg?react";
import Button from "../Button/Button";
import useHover from "../../hooks/useHovered";
const Search: React.FunctionComponent = () => {
    const [inputParam, setInputParam] = useState<string>("");
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const input = useRef<HTMLInputElement | null>(null);
    const [hoveredRef, isHovered] = useHover<HTMLDivElement>();

    const searchClass = `${style.search} ${isFocused ? style.outline : ""} ${!isHovered && isFocused ? style.hovered : ""}`

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputParam(e.target.value);
    }
    const handleClearText = (): void => {
        setInputParam("");
    }
    const handleFocus = (): void => {
        input.current?.focus();
        setIsFocused(true)
    }
    const handleBlur = (): void => {
        setIsFocused(false)
    }


    return (
        <div className={searchClass} onClick={handleFocus} ref={hoveredRef}>
            <SearchIcon />
            <input type="text" name="search" value={inputParam} onChange={handleChange} ref={input} onFocus={() => { setIsFocused(true) }} placeholder="Search Reddit" onBlur={handleBlur} />
            <Button onClick={handleClearText} className={inputParam.length > 0 ? style.buttonMargin : style.opacity} ><span className={style.iconContainer}><ClearTextIcon /></span></Button>
        </div >)
}
export default Search;