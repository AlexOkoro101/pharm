import { createSlice } from '@reduxjs/toolkit';

export const drugsSlice = createSlice({
    name: 'drugs',
    initialState: {value: []},
    reducers: {
        getDrugs: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const {getDrugs} = drugsSlice.actions;

export default drugsSlice.reducer;