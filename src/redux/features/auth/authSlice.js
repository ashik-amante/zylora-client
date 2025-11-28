import { createSlice } from "@reduxjs/toolkit";


const loadUserFromLocalStroge = () => {
    try {
        const serializeState = localStorage.getItem('user')
        if (serializeState == null) return { user: null }
        return { user: JSON.parse(serializeState) }
    } catch (error) {
        console.log(error);
        return { user: null }
    }
}
const initialState = loadUserFromLocalStroge()

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            localStorage.setItem('user', JSON.stringify(state.user))
        },
        logout: (state)=>{
            state.user = null
            localStorage.removeItem('user')
        }
    }
})

export const {setUser,logout} = authSlice.actions
export default authSlice.reducer