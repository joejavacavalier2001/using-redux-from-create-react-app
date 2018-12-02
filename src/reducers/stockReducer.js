const stockReducer = (state = {
    name: "TEST",
    price: 0
}, action) => {
    switch (action.type) {
    case "SET_PRICE_FULFILLED":
        state = {
            ...state,
            price: action.payload
        };
        break;
    default:
        state = {...state};
        break;
    }

    return state;
};

export default stockReducer;

