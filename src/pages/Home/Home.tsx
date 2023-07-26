import Item from "@/components/Item";
import { Context } from "@/context";
import { RootState } from "@/context/store";
import { IProduct } from "@/interfaces";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const initialCars = [
    { id: 1, name: "BMW" },
    { id: 2, name: "Mercedes" },
    { id: 3, name: "Audi" },
];
const Home = () => {
    // const { state, dispatch } = useContext(Context);
    const products = useSelector((state: RootState) => state.productReducer.products);
    const dispatch = useDispatch();

    useEffect(() => {
        const listProduct = async () => {
            const res = await fetch("http://localhost:8000/products");
            const data = await res.json();
            dispatch({ type: "product/list-product", payload: data });
        };

        listProduct();
    }, [dispatch]);

    const handleAddProduct = async () => {
        try {
            const res = await fetch("http://localhost:8000/products", {
                method: "POST",
                body: JSON.stringify({ name: "Product C" }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            dispatch({ type: "product/add-product", payload: data });
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteProduct = async (id: string | number) => {
        try {
            await fetch("http://localhost:8000/products/" + id, {
                method: "DELETE",
            });
            const newProducts = [...products].filter((item) => item.id !== id);
            dispatch({ type: "product/delete-product", payload: newProducts });
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditProduct = async (id: string | number) => {
        try {
            const res = await fetch("http://localhost:8000/products/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: "Product C update" }),
            });
            const data = await res.json();

            const newProducts = [...products].map((item) => (item.id === id ? data : item));
            dispatch({ type: "product/update-product", payload: newProducts });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-96 mx-auto border border-gray-500 p-2">
            {/* <Form onAdd={addCar} /> */}
            <button onClick={handleAddProduct}>add</button>

            {/* <p>{state.countReducer.count}</p>
            <button onClick={() => dispatch({ type: "increment", payload: 1 })}>increment</button> */}
            <ul>
                {products?.map((product: IProduct) => (
                    // <Item key={product.id} {...product} />
                    <Item key={product.id} {...product}  />
                ))}
            </ul>
        </div>
    );
};

export default Home;
