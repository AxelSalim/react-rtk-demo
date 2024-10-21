import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data.map((user) => user.id))
})

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        users: [],
        error: "",
    },
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ""
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })    
    }
})


export default userSlice.reducer
export const fetchUtilisateurs = fetchUsers