import { ProductContext } from '@/context/producContext'
import axios from 'axios';
import { useContext, useEffect } from 'react'



const ListProduct = () => {
  const { state, dispatch } = useContext(ProductContext);

  // console.log(products);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/products`);
        dispatch({ type: "GET-PRODUCT", payload: data })
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct()
  }, [])
  // console.log(state);
  const addProduct = async (product: any) => {
    try {
      // call api
      const { data } = await axios.post(`http://localhost:3000/products`, product);
      // rerender
      dispatch({ type: "ADD-PRODUCT", payload: data });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const deleteProduct = async (product: any) => {
    try {
      // call api
      await axios.delete(`http://localhost:3000/products/${product.id}`);
      // rerender
      dispatch({ type: "DELETE-PRODUCT", payload: product.id })
      // console.log(product);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const editProduct = async (product: any) => {
    try {
      console.log(product);
      // call api
      const { data } = await axios.put(`http://localhost:3000/products/${product.id}`, product);
      // rerender
      dispatch({ type: "EDIT-PRODUCT", payload: product.id });
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div>
        <button onClick={() => addProduct({ name: "san pham f" })}>them</button>
      </div>
      {state?.products?.map((item: any) => {
        return <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => deleteProduct(item)}>xoa</button>/
          <button onClick={() => editProduct({ id: item.id, name: "san pham update" })}>sua</button>
        </div>
      })}
    </div>
  )
}

export default ListProduct