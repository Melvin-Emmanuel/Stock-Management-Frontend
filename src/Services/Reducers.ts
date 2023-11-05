import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modal: false,
    LoginModal:false


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
        }
  }
});

export const {ChangeModal,ChangeLogin} = Reducers.actions

export default Reducers.reducer