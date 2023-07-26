import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { decrement, increase, increatement } from './slices/counter'
type Props = {}

const Count = (props: Props) => {
    const count = useSelector((state: any) => state.counter.count)
    const dispatch = useDispatch()
    // console.log(count);
    return (
        <>
            <div>{count}</div>
            <button onClick={() => dispatch(increatement())}>incre</button>/
            <button onClick={() => dispatch(decrement())}>decre</button>/
            <button onClick={() => dispatch(increase(20))}>inscre</button>


        </>
    )
}

export default Count