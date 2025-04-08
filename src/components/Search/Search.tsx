import { useState } from "react";
import style from "./search.module.css"
const Search: React.FunctionComponent = () => {
    const [inputParam, setInputParam] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputParam(e.target.value);
    }

    return (
        <div style={{ width: "40%" }}>
            <input type="text" name="search" value={inputParam} onChange={handleChange} className={style.search} />
        </div>)
}
export default Search;