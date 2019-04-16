const stockReducer = (state = {
    name: "TEST",
    showErrorDialog: false,
    errorMessage: "",
    price: 0
}, action) => {
    switch (action.type) {
    case "SET_PRICE_FULFILLED":
        state = {
            ...state,
            price: action.payload
        };
        break;
    case "SET_PRICE_REJECTED":
        state = {
            ...state,
            showErrorDialog: true,
            errorMessage: action.payload.message
        };
        break;
    case "HIDE_STOCK_ERROR":
        state = {
            ...state,
            showErrorDialog: false
        };
        break;
    default:
        state = {...state};
        break;
    }

    return state;
};

export default stockReducer;

