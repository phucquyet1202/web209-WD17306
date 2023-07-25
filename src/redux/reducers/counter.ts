export const initialState = {
  count: 0,
};
export const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "INSCREMENT":
      return { count: state.count + action.payload };

    default:
      return state;
  }
};
