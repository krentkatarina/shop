import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';
import { BASE_URL } from "../../utils/constants";

export const getProducts = createAsyncThunk('products/getProducts', async (_, thunkAPI) =>  {
    try {
        const res = await axios(`${BASE_URL}/products`);
        return res.data;
    } catch(err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err);
    }
});

const productsSlice = createSlice({
    name: 'getProducts',
    initialState: {
        list: [],
        filtered: [],
        // related: [],
        isLoading: false
    },
    reducers: {
        filteresByPrice: (state, {payload }) => {
            state.filtered = state.list.filter(({ price}) => price < payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
            console.log('123');
        })
        builder.addCase(getProducts.fulfilled, (state, {payload}) => {
            state.list = payload;
        })
    }
});


export const { filteresByPrice} = productsSlice.actions;
export default productsSlice.reducer;


