import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
}

// Register User
export const register = createAsyncThunk(
    'auth/register',
    async(user, thunkAPI)=>{
        try {
            return await authService.register(user)
        } catch (error) {
            const message = (error.response && 
                error.response.data && 
                error.response.data.message) || 
                error.message || 
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
//Login User
export const login = createAsyncThunk(
    'auth/login',
    async(user, thunkAPI)=>{
        try {
            return await authService.login(user)
        } catch (error) {
            const message = (error.response && 
                error.response.data && 
                error.response.data.message) || 
                error.message || 
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
//LogOut user
export const logOut = createAsyncThunk(
   ' auth/logOut',
   async() => {
    await authService.logOut()
   }
)




const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        },
    },
    extraReducers: (builder)=>{
        builder
        .addCase(register.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        .addCase(login.pending, (state,)=>{
            state.isLoading = true
            
        })
        .addCase(login.fulfilled, (state, action)=>{
            state.isSuccess = true
            state.isLoading = true
            state.user = action.payload
        })
        .addCase(login.rejected, (state, action)=>{
            state.isError = true
            state.isLoading = false
            state.message = action.payload
            state.user = null
        })
        .addCase(logOut.fulfilled, (state, )=>{
            state.user = null
        })
    }
})

export const {reset} = authSlice.actions;
export default authSlice.reducer;
