import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    message: "",
    data: {},
    isSuccess: false,
    loading: false,
};

export const restaurantListAsyncThunk: any = createAsyncThunk(
    "recent/ restaurantListAsyncThunk",
    // async ({ rejectWithValue }: any) => {
    //     try {
    //         const fetchedData: any = await axios({
    //             method: "get",
    //             url: "https://lorem.herokuapp.com/Lorem/viewAllBrands",
    //         });
    //         console.log(fetchedData);

    //         return fetchedData;
    //     } catch (error) {
    //         rejectWithValue(error);
    //     }
    // }
    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {
            const { data } = await axios.get(`https://lorem.herokuapp.com/Lorem/Search?longitude=74.742142&latitude=13.340881`);
            return data;
        } catch (error) {
            if (!error) {
                throw error
            }
            return rejectWithValue(error);
        }

    }
);

export const restaurantListSlice = createSlice({
    name: "restaurantList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(restaurantListAsyncThunk.pending, (state, action) => {
            // Add user to the state array
            state.loading = true;
        });
        builder.addCase(restaurantListAsyncThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.isSuccess = true;
        });
        builder.addCase(restaurantListAsyncThunk.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        });
    },
});

export const { } = restaurantListSlice.actions;

export default restaurantListSlice;