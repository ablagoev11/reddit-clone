
import Layout from "./Layout/Layout";
import Homepage from "./Homepage/Homepage";

const routes = [{ path: '/', element: <Layout />, children: [{ index: true, element: <Homepage /> }, { path: "/login/callback", element: <Homepage /> }] }]
export default routes;