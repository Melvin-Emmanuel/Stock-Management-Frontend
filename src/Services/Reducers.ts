import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modal: false,
    LoginModal: false,
    notification: false,
    sales: false,
    products: false,
    apps: false,
    category:false

     


}

const Reducers = createSlice({
  name: "Stock-inventory",
  initialState,
    reducers: {
        ChangeModal: (state) => {
            state.modal=!state.modal
        },
        ChangeLogin: (state) => {
            state.LoginModal=!state.LoginModal
        },
        changeNotification: (state) => {
            state.notification = !state.notification
            state.apps=false
        },
        changeApps: (state) => {
            state.apps = !state.apps
            state.notification=false
        },
        ChangeCategory: (state) => {
            state.category=!state.category
        },
        ChangeProducts: (state) => {
            state.products=!state.products
        },
        ChangeSales: (state) => {
            state.sales=!state.sales
        }

  }
});

export const {
  ChangeModal,
  ChangeLogin,
  changeNotification,
  changeApps,
  ChangeCategory,
  ChangeProducts,
  ChangeSales,
} = Reducers.actions;

export default Reducers.reducer