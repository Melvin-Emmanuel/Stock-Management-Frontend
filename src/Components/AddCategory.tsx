import React from 'react'
import {useForm} from "react-hook-form"
import { createCategory } from "../Services/apiFiles/ApiCalls"
import {toast} from "react-toastify"




interface Data{
    Name:string
}


const AddCategory = () => {
      const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Data>();
    
    const createCat = handleSubmit(async(data: Data) => {
        const { Name }: any = data
        const response = await createCategory({
            Name
        })
   
        return response
 })
  return (
     <main className="p-4 md:ml-64 h-auto pt-20">
      
            <form onSubmit={createCat} className="h-[80vh] w-[90%] border-2 border-gray-60 rounded-lg md:mt-10 md:h-[75vh]">
            <h1 className="text-3xl text-gray-900 p-8 font-semibold">
              Add Category
            </h1>
            <hr />

            <div className="h-auto w-[90%] flex mt-6 flex-col mx-auto">
            
              <label htmlFor="Category" className="text-gray-600 font-medium mb-3">
                Category Name
              </label>
              <input {...register("Name",
              {required:"category Name is required"})}
                className="h-10 w-[100%] text-gray-500 rounded-lg outline-none border-1 border-gray-500"
                type="text"
                id="category"
                          />
                          <p>{ errors.Name?.message}</p>
                      </div>
                      
                      <div className="w-[90%] mx-auto mt-8 flex gap-10">
                          <button>Add Category</button>
                          <div className="p-7 pt-5 pb-5  cursor-pointer bg-pink-500 rounded-lg">Reset</div>
                      </div>
          </form>
      </main>
        //     <form onSubmit={createCat} className="h-[80vh] w-[90%] border-2 border-gray-60 rounded-lg md:mt-10 md:h-[75vh]">
        //     <h1 className="text-3xl text-gray-900 p-8 font-semibold">
        //       Add Category
        //     </h1>
        //     <hr />

        //     <div className="h-auto w-[90%] flex mt-6 flex-col mx-auto">
            
        //       <label htmlFor="Category" className="text-gray-600 font-medium mb-3">
        //         Category Name
        //       </label>
        //       <input {...register("Name",
        //       {required:"category Name is required"})}
        //         className="h-10 w-[100%] text-gray-500 rounded-lg outline-none border-1 border-gray-500"
        //         type="text"
        //         id="category"
        //                   />
        //                   <p>{ errors.Name?.message}</p>
        //               </div>
                      
        //               <div className="w-[90%] mx-auto mt-8 flex gap-10">
        //                   <button>Add Category</button>
        //                   <div className="p-7 pt-5 pb-5  cursor-pointer bg-pink-500 rounded-lg">Reset</div>
        //               </div>
        //   </form>
      
      
  )
}

export default AddCategory