import {createSlice} from '@reduxjs/toolkit'

const initialAdminLoginState = false;

const adminLogin = createSlice({
    name: 'adminLogin',
    initialState: initialAdminLoginState,
    reducers: {
        login: (state, action) => {
            return action.payload
        }
    }

})

const adminReducers = {
    adminLogin: adminLogin,
}

export default adminReducers