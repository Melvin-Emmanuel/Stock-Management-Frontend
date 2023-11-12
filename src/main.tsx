import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux"
import { store } from './Services/Store.ts'
import {ToastContainer} from "react-toastify"
import { RouterProvider } from 'react-router-dom';
import Index from "./Allroutes/Allroutes.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={Index}/>
        {/* <App />
        <WebLayout /> */}
      
    </Provider>
  </React.StrictMode>
);
