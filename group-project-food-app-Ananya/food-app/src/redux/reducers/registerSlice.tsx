import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  message: "",
  data: {},
  isSuccess: false,
  loading: false,
  email: "",
};

export const emailAsyncThunk: any = createAsyncThunk(
  "recent/ emailAsyncThunk",
  async (email: any, { rejectWithValue }: any) => {
    console.log(email);

    try {
      const fetchedData: any = await axios({
        method: "put",
        url: "https://lorem.herokuapp.com/Lorem/emails2fa",
        data: {
          emailId: email,
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

export const emailSlice = createSlice({
  name: "verifyEmail",
  initialState,
  reducers: {
    storeEmail: (state: any, action: any) => {
      console.log("storedemail", action.payload);
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(emailAsyncThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(emailAsyncThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isSuccess = true;
    });
    builder.addCase(emailAsyncThunk.rejected, (state, action) => {
      state.message = action.payload;
      state.loading = false;
      state.isSuccess = false;
    });
  },
});

export const { storeEmail } = emailSlice.actions;

export default emailSlice;
