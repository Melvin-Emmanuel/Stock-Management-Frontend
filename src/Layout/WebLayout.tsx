
import DashHeader from "../Pages/Blocks/DashHeader"
import SideBar from "../Pages/Blocks/SideBar"

import AddProducts from "../Components/AddProducts"



// interface Data{
//     Name:string
// }

const WebLayout = () => {
//     const {
//       register,
//       handleSubmit,
//       formState: { errors },
//     } = useForm<Data>();
    
//     const createCat = handleSubmit(async(data: Data) => {
//         const { Name }: any = data
//         const response = await createCategory({
//             Name
//         })
   
//         return response
//  })
  return (
    <div>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        <DashHeader />
              <SideBar />
        <AddProducts/>
        {/* <AddCategory/> */}

      
          {/* <AddCategory /> */}
          {/* <form onSubmit={createCat} className="h-[80vh] w-[90%] border-2 border-gray-60 rounded-lg md:mt-10 md:h-[75vh]">
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
          </form> */}

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"></div>
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
          </div> */}
       {/*  */}
      </div>
    </div>
  );
}

export default WebLayout