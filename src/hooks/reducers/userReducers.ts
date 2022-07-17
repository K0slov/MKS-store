import { createSlice } from '@reduxjs/toolkit'

export const initialState =  {
    produtos: [{
        id: 1,
        name: 'A',
        description: 'A',
        photo: 'A',
        price: 1,
        qty: 1
    }],
    loading: false,
    error: false,
}

const itensSlice = createSlice({    
        name: 'name',
        initialState,
        reducers: {
            getProduct: (state, action) => {
                state.produtos = action.payload;
                state.loading = true;
                state.error = false;
            },
            addProduct: (state, action) => {
                state.produtos.unshift(action.payload);
                state.loading = false;
            },
            removeProduct: (state, action) => {
                state.produtos.filter((produtos) => produtos.qty !== action.payload.qty --)
                state.loading = false;
            },
            deleteProduct: (state, action) => {
                state.produtos.filter((produtos) => produtos.id !== action.payload.id)
                state.loading = false;
            }
        }
    
})

export const { getProduct, addProduct, removeProduct, deleteProduct} = itensSlice.actions;
export default itensSlice.reducer;