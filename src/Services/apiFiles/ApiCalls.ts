import { toast } from "react-toastify";
import Instance from "./ApiConfig";
import ShowToast from "../../Pages/Commons/ShowToast";
import { useNavigate } from "react-router";

// const isLogin=useSelector((state:any)=>state.isLogin)

interface userReg{
    FullName: string
    Email: string
    Password:string
}
interface userLogin{
    Email: string
    Password:string
}
interface category{
    Name:string
}
export const TestApi = async()=> {
    try {
        const response = await Instance.get("")
        // toast.success(response.data.message)
        const notify = () => toast.success("success", {
            autoClose:2000
        })
        
         console.log(response.data.message);
        return notify
        
    } catch (error) {
        console.log("api error")
        
    }
}
export const RegUser = async (data: userReg) => {
    try {

        const response = await Instance.post("/Create-User", data, {
            headers: {
                "Content-Type":"Application/json"
            }
        
        });
           {
            
        } ShowToast(true,`${response.data.message}`)
       
      
        return response
     
    } catch (error: any) {
        // {toast.error(error.response.data.message)}
        ShowToast(false,`${error.response.data.message}`)
        return error
        
    }
}
export const userLogin = async (data: userLogin) => {
    try {
        const response = await Instance.post("/Login-User", data, {
            headers: {
                "Content-Type":"Application/json"
            }
        });
        {
          toast.success(response.data.message);
        }
        return response
    } catch (error: any) {
        
        console.log(error.message)
        
    }
}
export const createCategory = async (data: category) => {
    try {
        const response = await Instance.post(
            "/create-Category/6543f1fbea4f6bd622a3e068", data, {
                headers: {
                  "Content-Type":"Application/json"
              }
          }
        )
        if (response.status === 200 || 201) {
            ShowToast(true, `${response.data.message}`)
            
     }
        return response
    } catch (error:any) {
       ShowToast(false,`${error.response.data.message}`)
    }
}
