import { createSlice } from "@reduxjs/toolkit";
// export const initialState = {
//   count: 0,
// };
// export const Reducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1 };
//     case "DECREMENT":
//       return { count: state.count - 1 };
//     case "INSCREMENT":
//       return { count: state.count + action.payload };

//     default:
//       return state;
//   }
// };

const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increatement: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    increase: (state, action) => {
      state.count += action.payload;
    },
  },
});
export const { increatement, decrement, increase } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
