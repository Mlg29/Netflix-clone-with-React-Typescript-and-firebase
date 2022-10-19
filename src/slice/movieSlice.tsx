import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { AuthState, MovieState } from '../interface'
import { getRequest } from '../helper'
import requests from '../helper/request'


const initialState: MovieState = {
    data: [],
    loading: false,
    error: null
}


export const fetchMovie = createAsyncThunk(
    'movie/fetchMovie',
    async () => {
        try {
            var response = await getRequest(requests?.fetchNetflixOriginals)
            if(response?.status === 200) {
                return response?.data
            }
            
        }
        catch (e) {

        }
    }
)

export const movieSlice = createSlice({
    name: 'movie',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovie.pending, (state, action) => {
            state.loading = true
        }),
            builder.addCase(fetchMovie.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false
            }),
            builder.addCase(fetchMovie.rejected, (state, action) => {
                state.loading = false
            })
    }
})



export default movieSlice.reducer