import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '../features/product/productSlice'


export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (gDM) => gDM().concat(productApi.middleware)
})
