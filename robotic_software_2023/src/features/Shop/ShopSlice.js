import { createSlice } from '@reduxjs/toolkit'

const initialAllItemsState = []

const allItems = createSlice({
    name: 'allItems',
    initialState: initialAllItemsState,
    reducers: {
        showAllItems: (state, action)  => {
            return action.payload.items;
        }
    }
})

export default allItems;