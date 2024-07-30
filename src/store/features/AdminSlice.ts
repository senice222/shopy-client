
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {url} from "../../core/fetch";

interface AccountState {
    admin: {
        login: string,
        role: string
    } | null
}
export const fetchAdmin = createAsyncThunk(
    'admin/fetchMe',
    // if you type your function argument here
    async () => {
        const token = localStorage.getItem('token')
        const {data} = await axios.get(`${url}/api/admin/me`, {headers: {
                'Authorization' : `Bearer ${token}`
            }})

        return data
        // return (await response.json())
    },
)
export const fetchLogin = createAsyncThunk(
    'admin/fetchLogin',
    // if you type your function argument here
    async ({username, password} : {username: string, password: string}) => {
        const token = localStorage.getItem('token')
        const {data} = await axios.post(`${url}/api/admin/login`, {login: username, password: password})
        localStorage.setItem('token', data.token)
        return data.admin
        // return (await response.json())
    },
)
const initialState: AccountState = {
    admin: null
}

export const adminSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        signOut: (state, action) => {
            localStorage.removeItem('token')
            state.admin = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAdmin.fulfilled, (state, action) => {
            state.admin = {login: action.payload.login, role: action.payload.role}
        })
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.admin = {login: action.payload.login, role: action.payload.role}
        })
    }
})

export const { signOut } = adminSlice.actions

export default adminSlice.reducer