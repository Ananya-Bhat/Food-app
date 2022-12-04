import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState: any = {
  message: "",
  data: [],
  isSuccess: false,
  loading: false,
};

export const brandsData: any = createAsyncThunk(
  "brands/brandsData",
  async (arg: any, { rejectWithValue }) => {
    try {
      const fetchbrands: any = await axios
        .request({
          method: "GET",
          url: "https://lorem.herokuapp.com/Lorem/viewPopularBrands",
          headers: {
            Host: "<calculated when request is sent></calculated>",
            "User-Agent": "PostmanRuntime/7.29.2",
            Accept: "*/*",
            " Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive",
          },
        })
        .then((res: any) => {
          console.log(res);
        });
      console.log(fetchbrands);

      return fetchbrands;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(brandsData.pending, (state: any, action: any) => {
      // Add user to the state array
      state.loading = true;
    });
    builder.addCase(brandsData.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.data = action.payload;
      state.isSuccess = true;
    });
    builder.addCase(brandsData.rejected, (state: any, action: any) => {
      state.message = action.payload;
      state.loading = false;
      state.isSuccess = false;
    });
  },
});

export default brandsSlice;
