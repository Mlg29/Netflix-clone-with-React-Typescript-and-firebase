import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { AuthState } from '../interface'
import axios from 'axios'


const initialState: AuthState = {
  info: [],
  token: '',
  loading: false,
  error: null
}
const AUTH_KEY = 'AIzaSyBMMtSct8Cnge3OkztWiCNOu74b3mgYejA'

export const createUser = createAsyncThunk(
  'auth/createUser',
  async (payload: { email: string, password: string }, { rejectWithValue }) => {
    const pd = {
      email: payload?.email,
      password: payload?.password,
      returnSecureToken: true
    }
    try {
      var response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${AUTH_KEY}`, pd)
      if (response?.status === 200) {
        return response?.data
      }
    }
    catch (e) {
      console.log({ e })
      rejectWithValue(e)
    }
  }
)

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (payload: { email: string, password: string }, { rejectWithValue }) => {
    const pd = {
      email: payload?.email,
      password: payload?.password,
      returnSecureToken: true
    }

    try {
      var response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${AUTH_KEY}`, pd)
      if (response?.status === 200) {
        return response?.data
      }

    }
    catch (e) {
      console.log({ e })
      rejectWithValue(e)
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<AuthState>) => {
    builder.addCase(createUser.pending, (state, action) => {
      state.loading = true
    })
      builder.addCase(createUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.token = action.payload.idToken
      })
      builder.addCase(createUser.rejected, (state, action) => {
        state.loading = false
      })
      builder.addCase(loginUser.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.token = action.payload.idToken
      })
      builder.addCase(loginUser.rejected, (state, action) => {
        state.loading = false
      })
  }
})

export const userToken = (state: RootState) => state.auth.token;


export default authSlice.reducer
