import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};


export const mealSlice = createSlice({
  name: 'meal',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    randomize: (state) => {
    },
  },
});

export const { fn } = mealSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;


export default mealSlice.reducer;
