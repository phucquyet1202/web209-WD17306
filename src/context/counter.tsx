import { createContext, useReducer } from "react";

export const CounterContext = createContext({} as any)
const initialState = {
    count: 0
}
const counterReducer = (state: any, action: any) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + action.payload }

        default:
            return state
    }
}

const CounterProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    return (
        <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
    );
};
export default CounterProvider;