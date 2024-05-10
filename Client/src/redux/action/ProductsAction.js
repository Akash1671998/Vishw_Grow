import axios from "axios";
import { GET_PRODUCTS_SUCCESS } from "../constaint/ProductConstaint";
import { GET_PRODUCTS_FAILD } from "../constaint/ProductConstaint";

export const ProductActions = () => async (dispatch) => {
  try {
    let {data} = await axios.get("http://localhost:9091/getproducts");
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload:data});
    console.log("GET_PRODUCTS_SUCCESS", response);
  } catch (error) {
    console.log("Error While the Call getProducts Api ".error.message);
    dispatch({ type: GET_PRODUCTS_FAILD, payload:error.message});
  }
};
