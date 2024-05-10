import axios from "axios";

let URL = "http://localhost:9091";
// Create a New User 
export const authenticatedSignup = async(data) => {
    console.log("/////////////",data)
  try {
   return await  axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error While Create a New User",error.message);
  }
};

// For Login 
export const authenticatedSignin = async(data) => {
try {
 return await  axios.post(`${URL}/signin`, data);
} catch (error) {
  console.log("Error While Login a User",error);
  return error.responce
}
};

export const getProduct = async(data) => {
  try {
   return await  axios.post(`${URL}/getproducts`, data);
  } catch (error) {
    console.log("Error While Login a User",error);
    return error.responce
  }
  };