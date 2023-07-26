import axios from 'axios'
import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import Cart from '@/components/cart/cart'
import { useAppDispatch, useAppSelector } from './store/hook'
import { useDispatch } from 'react-redux'
import { getProduct } from './actions/product'

type Props = {}

const Product = (props: Props) => {
    const { products, isLoading, err } = useAppSelector((state: any) => state.products)
    const dispatch = useAppDispatch()
    console.log(products);
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    // console.log(products);
    if (isLoading) return <div>Loading...</div>;
    if (err) return <div>{err}</div>;
    return (
        <div>
            <table>
                {/* <button onClick={() => dispatch(addProducts({ name: "san pham duoc them" }))}>them</button> */}
                <tr>
                    <td>stt</td>
                    <td>ten sp</td>
                    <td>hanh dong</td>
                </tr>
                {products?.map((pro: any, index: number) => {
                    return <tr key={pro.id}>
                        <td>{index + 1}</td>
                        <td>{pro.name}</td>
                        {/* <td><button onClick={() => dispatch(removeProducts(pro.id))}>xoa</button>
                            <button onClick={() => dispatch(updateProducts({ id: pro.id, name: "san pham update" }))}>sua</button></td>
                        <button onClick={() => dispatch({ type: "cart/add", payload: { id: pro.id, name: pro.name, quantity: 1 } })}>them vao gio hang</button> */}
                    </tr>
                })}
            </table>
            <div>
                {/* <Cart /> */}
            </div>
        </div>
    )
}

export default Product