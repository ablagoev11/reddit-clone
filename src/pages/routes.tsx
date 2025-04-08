import { Children } from "react";
import Layout from "./Layout/Layout";
import Homepage from "./Homepage/Homepage";

const routes = [{ path: '/', element: <Layout />, children: [{ index: true, element: <Homepage /> }] }]
export default routes;