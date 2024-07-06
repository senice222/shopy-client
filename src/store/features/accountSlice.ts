import { createSlice } from '@reduxjs/toolkit'

interface AccountState {
    account: {
        service: string;
        email: string;
        password: string;
    }
}

const initialState: AccountState = {
    account: {
        service: '',
        email: '',
        password: '',
    }
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        chooseAccount: (state, action) => {
            const {service, email, password} = action.payload
            state.account.service = service
            state.account.email = email
            state.account.password = password
        }
    },
})

export const { chooseAccount } = accountSlice.actions

export default accountSlice.reducer