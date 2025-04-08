import { Link } from "react-router-dom";
import style from "./logo.module.css"
import RedditLogo from "../../assets/icons/reddit-logo.svg?react"
import RedditIcon from "../../assets/icons/reddit-icon.svg?react"
const Logo: React.FunctionComponent = () => {
    return <div>
        <Link to="/" className={style.link}><RedditIcon className={style.icon} /><RedditLogo className={style.logo} /></Link>
    </div>
}
export default Logo;