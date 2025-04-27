
import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import RedditAuth from "../../auth/Authentication";
import { getAuth } from "../../features/auth/authSlice";
import useRefresh from "../../hooks/useRefresh";
import style from "./homepage.module.css"
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Homepage: React.FunctionComponent = () => {
    const [user, setUser] = useState();
    const axiosPrivate = useAxiosPrivate();
    const accessToken = useAppSelector(getAuth)
    const refresh = useRefresh();
    useEffect(() => {
        const getUser = async () => {
            const data = await axiosPrivate.get("/api/me");
            console.log(data);
        }
        getUser();
    }, [axiosPrivate])
    return (
        <main>
            <RedditAuth />
            <button onClick={refresh}>refresh</button>
            {accessToken && accessToken}
        </main >
    )
}

export default Homepage;