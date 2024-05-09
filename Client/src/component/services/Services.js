import axios from "axios";

let URL = "http://localhost:9090";
export const authenticatedSignup = async(data) => {
    console.log("/////////////",data)
  try {
   return await  axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error While Create a New User",error.message);
  }
};
