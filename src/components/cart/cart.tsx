import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state: any) => state.cartReducer.items);
  const dispatch = useDispatch();
  console.log(products);
  return (
    <div>
      {products?.map((item: any) => {
        return (
          <div key={item.id}>
            {item.name}
            <button
              onClick={() =>
                dispatch({
                  type: "cart/increment",
                  payload: item.id,
                })
              }
            >
              Increase
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "cart/decrement",
                  payload: item.id,
                })
              }
            >
              Decrement
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
