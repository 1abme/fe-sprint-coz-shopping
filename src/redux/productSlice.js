import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(fetchProductsStart());
    const response = await axios.get(
      "http://cozshopping.codestates-seb.link/api/v1/products"
    );
    dispatch(fetchProductsSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};

export default productSlice.reducer;
