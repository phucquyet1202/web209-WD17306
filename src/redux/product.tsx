import axios from 'axios'
import React, { useEffect } from 'react'
import Cart from '@/components/cart/cart'
import { useAppDispatch, useAppSelector } from './store/hook'
import { addProduct, getProduct, removeProduct, updateProduct } from './actions/product'


const Product = () => {
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
                <button onClick={() => dispatch(addProduct({ name: "san pham duoc them" }))}>them</button>
                <tr>
                    <td>stt</td>
                    <td>ten sp</td>
                    <td>hanh dong</td>
                </tr>
                {products?.map((pro: any, index: number) => {
                    return <tr key={pro.id}>
                        <td>{index + 1}</td>
                        <td>{pro.name}</td>
                        <td><button onClick={() => dispatch(removeProduct(pro.id))}>xoa</button>
                            <button onClick={() => dispatch(updateProduct({ id: pro.id, name: "san pham update" }))}>sua</button></td>
                        <button onClick={() => dispatch({ type: "cart/add", payload: { id: pro.id, name: pro.name, quantity: 1 } })}>them vao gio hang</button>
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