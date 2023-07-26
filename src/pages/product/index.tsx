import { useAppSelector } from "@/redux/store";
import { increase } from "@/redux/counter/counter.slice";
import { useAppDispatch } from "@/redux/store";
import { addProduct, getProducts } from "@/redux/product/product.slice";
import { useEffect } from "react";

const Product = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.productReducer.products);

    console.log(products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <>
            <div>
                {products.map((product) => (
                    <div key={product.id}>{product.name}</div>
                ))}
            </div>

            <button onClick={() => dispatch(addProduct({name: 'Product D'}))}>Them</button>
        </>
    );
};

export default Product;
