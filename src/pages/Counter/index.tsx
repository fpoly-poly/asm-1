import { useAppSelector } from "@/redux/store";
import { increase } from "@/redux/counter/counter.slice";
import { useAppDispatch } from "@/redux/store";

const Counter = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => state.counterReducer.count);

    return (
        <>
            <div>{count}</div>

            <button onClick={() => dispatch(increase(10))}>increase</button>
        </>
    );
};

export default Counter;
