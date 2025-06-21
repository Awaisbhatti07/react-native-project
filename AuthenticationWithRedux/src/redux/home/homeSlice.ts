import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product, ProductsState} from './homeType';

const initialState: ProductsState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    clearProducts: state => {
      state.products = [];
    },
  },
});

export const {setProducts, clearProducts} = productSlice.actions;
export default productSlice.reducer;
