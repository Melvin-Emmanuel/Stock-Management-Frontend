
import { MdCancel } from "react-icons/md"
import { useDispatch } from 'react-redux';
import { ChangeLogin, ChangeModal } from '../Services/Reducers';
import { RegUser } from '../Services/apiFiles/ApiCalls';
import { useForm } from "react-hook-form"



interface Validation{
    FullName: string,
    Email: string
    Password:string
}
const Signup = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            FullName: "",
            Email: '',
            Password:''
        }
    })
    console.log(errors)
    const createUser = handleSubmit(async (data:Validation) => {
        try {
            const {FullName,Email,Password}:any=data
            const Response = await RegUser({
                FullName,
                Email,
                Password
                
            }) 
          if (Response.status === 201) {
            dispatch(ChangeModal())
            dispatch(ChangeLogin())
          }
        
          

        
     
        
           
            return Response
        } catch (error:any) {
            console.log(error.message)
            
        }
      
    })
    
  return (
    <div className="h-screen w-full fixed  top-0 left-0 right-0 bg-black bg-opacity-40 flex items-center justify-center   ">
      <div className="shadow-md   h-[90vh] w-[90%] bg-white flex justify-center items-center rounded-lg relative">
        <div
          onClick={() => {
            dispatch(ChangeModal());
          }}
          className="fixed top-[50px] text-2xl right-24 text-black cursor-pointer"
        >
          <MdCancel />
        </div>

        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-[90%]">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Register Account
              </h1>
              {/*  */}
              <form className="space-y-4 md:space-y-6" onSubmit={async(e) => {
                e.preventDefault()
              createUser();
            
             
              
              
                
              }}>
                <div>
                  <label
                    htmlFor="FullName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    FullName
                  </label>
                  <input
                    {...register("FullName", {
                      required: "This field is required",
                    })}
                    type="text"
                    name="FullName"
                    id="FullName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-sky-500"
                    placeholder="Enter FullName"
                    required
                  />
                  <p className="text-red-700">{errors.FullName?.message}</p>
                </div>
                <div>
                  <label
                    htmlFor="Email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    {...register("Email", {
                      required: "This field is required",
                    })}
                    type="Email"
                    name="Email"
                    id="Email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-sky-500"
                    placeholder="Enter Email"
                    required
                  />
                  <p className="text-red-700">{errors.Email?.message}</p>
                </div>
                <div className="flex w-full justify-between">
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      {...register("Password", {
                        required: "This field is required",
                      })}
                      type="Password"
                      name="Password"
                      id="Password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-500 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-sky-500"
                      required
                    />
                    <p className="text-red-500"> {errors.Password?.message}</p>
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      type="confirm-password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-500 focus:border-primary-600 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-start "> 
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                 
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-sky-500 hover:underline dark:text-sky-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full text-white bg-sky-500 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-500 dark:hover:bg-sky-500 dark:focus:ring-sky-500"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <span 
                    onClick={() => {
                      dispatch(ChangeModal())
                      dispatch(ChangeLogin())
                   }}
                    className="font-medium text-sky-500 cursor-pointer dark:text-sky-500"
                  >
                    Login here
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup