import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  message: "",
  data: {},
  isSuccess: false,
  loading: false,
};

export const regDetailsAsyncThunk: any = createAsyncThunk(
  "recent/regDetailsAsyncThunk",
  async (arg: any, { rejectWithValue }: any) => {
    console.log("arg", arg.email);

    try {
      const fetchedData: any = await axios({
        method: "post",
        url: "https://lorem.herokuapp.com/Lorem/register",
        data: {
          firstName: arg.firstName,
          lastName: arg.lastName,
          emailId: arg.emailId,
          mobileNo: arg.mobileNo,
          password: arg.password,
        },
      });
      console.log(fetchedData);

      return fetchedData;
    } catch (err) {
      let error: any = err;
      return rejectWithValue(error.response.data);
    }
  }
);

export const regDetailsSlice = createSlice({
  name: "regDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(regDetailsAsyncThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(regDetailsAsyncThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      console.log(state.data);

      state.isSuccess = true;
    });
    builder.addCase(regDetailsAsyncThunk.rejected, (state, action) => {
      state.message = action.payload;
      state.data = state.loading = false;
      state.isSuccess = false;
    });
  },
});

export const {} = regDetailsSlice.actions;

export default regDetailsSlice;
