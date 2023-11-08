import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Pages/Homepage";

import WebLayout from "../Layout/WebLayout";


const Index = createBrowserRouter([
  {
    path: "/",
    index:true,
    element:<Homepage/>
  }, {
    path: "Dashboard",
    element:<WebLayout/>
}
])

export default Index