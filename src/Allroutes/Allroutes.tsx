import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Pages/Homepage";

import WebLayout from "../Layout/WebLayout";
import Blogpost from "../Pages/Blogpost";
// import Contact from "../Pages/Contact";


const Index = createBrowserRouter([
  {
    path: "/",
    index:true,
    element:<Homepage/>
  }, {
    path: "Dashboard",
    element:<WebLayout/>
  },
  {
    path: "/blogpost",
    element:<Blogpost/>
  },
  // {
  //   path: "/contactus",
  //   element:<Contact/>
  // },
  
])

export default Index