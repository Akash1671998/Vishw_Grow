import { GET_PRODUCTS_SUCCESS } from "../constaint/ProductConstaint";
import { GET_PRODUCTS_FAILD } from "../constaint/ProductConstaint";

export function getProductReducer(state, action) {

    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return { products: action.payload };
        case GET_PRODUCTS_FAILD:
            return { error: action.payload };
        default:
            return state;
    }

}
