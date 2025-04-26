import { useLocation } from "react-router-dom";

const RedditAuth: React.FunctionComponent = () => {
    const { pathname } = useLocation();
    async function openLogin() {
        document.cookie = "redirect_path=" + pathname;
        window.open(
            `http://localhost:3000/auth/reddit`,
            "_self"
        )
    }
    return (<>
        <button onClick={openLogin}>Login Reddit</button>
    </>)
}
export default RedditAuth