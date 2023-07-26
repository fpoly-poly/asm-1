import { GoTrash } from "react-icons/go";
import { BiEditAlt } from "react-icons/bi";
import Button from "../Button/Button";
import { IProduct } from "@/interfaces";
import { useState } from "react";
import { useDispatch } from "react-redux";

type ItemProps = IProduct & {
    onRemove?: (id: string | number) => void;
    onEdit?: (id: string | number) => void;
};

const Item = ({ name, id, quantity }: ItemProps) => {
    const [prdQuantity, setPrdQuantity] = useState<number>(quantity || 1);
    const dispatch = useDispatch();
    return (
        <li className="flex justify-between items-center p-2">
            <h1>{name}</h1>
            <button onClick={() => setPrdQuantity(prdQuantity + 1)}>+</button>
            <button>-</button>
            <input type="number" value={prdQuantity} className="border-red-500 border-[1px] w-[50px]" />
            <button onClick={() => dispatch({ type: "cart/add", payload: { name, id, quantity: prdQuantity } })}>Add</button>
        </li>
    );
};

export default Item;
