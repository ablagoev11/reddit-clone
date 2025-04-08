import { useState } from "react";
const Search: React.FunctionComponent = () => {
    const [inputParam, setInputParam] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputParam(e.target.value);
    }

    return (
        <div>
            <input type="text" name="search" value={inputParam} onChange={handleChange} />
        </div>)
}
export default Search;