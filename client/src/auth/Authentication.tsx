const RedditAuth: React.FunctionComponent = () => {
    function openLogin() {
        window.open(
            `https://www.reddit.com/api/v1/authorize?
							client_id=AhjZWMDdA6w8OqmbBs7Zsg&response_type=code
							&state=random-string
							&redirect_uri=http://localhost:5173/login/callback
							&duration=permanent&scope=identity,submit,save`,
            "_self"
        )
    }
    return (<>
        <button onClick={openLogin}>Login Reddit</button>
    </>)
}
export default RedditAuth