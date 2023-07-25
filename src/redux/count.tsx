import React from 'react'
import { useSelector, useDispatch } from "react-redux"
type Props = {}

const Count = (props: Props) => {
    const count = useSelector((state: any) => state.couterReducer.count)
    const dispatch = useDispatch()
    console.log(count);
    return (
        <>
            <div>{count}</div>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>incre</button>/
            <button onClick={() => dispatch({ type: "DECREMENT" })}>decre</button>/
            <button onClick={() => dispatch({ type: "INSCREMENT", payload: 10 })}>inscre</button>


        </>
    )
}

export default Count