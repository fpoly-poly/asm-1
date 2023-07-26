const initialState = {
    count: 0,
};

const action = {
    type: "INCREMENT",
    payload: 10,
};

const countReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.payload,
            };

        default:
            return state;
    }
};

console.log("InitialState", initialState);
const nextState = countReducer(initialState, action);
console.log("nextState", nextState);
