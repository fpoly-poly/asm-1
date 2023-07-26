import { useAppSelector } from "@/context/store";
import { useDispatch } from "react-redux";

const Cart = () => {
    const carts = useAppSelector((state) => state.cartReducer.carts);

    console.log(carts);
    const dispatch = useDispatch();


    return (
        <div>
            <button onClick={() => dispatch({ type: "cart/add", payload: { id: 1, name: "Product 1", quantity: 1 } })}>click</button>
        </div>
    );
};

export default Cart;
