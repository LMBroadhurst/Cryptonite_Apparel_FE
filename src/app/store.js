import { configureStore } from '@reduxjs/toolkit'
import { api } from '../features/api/apiSlice'


export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (gDM) => gDM().concat(api.middleware),
})
