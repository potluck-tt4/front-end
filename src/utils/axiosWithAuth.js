import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://potluck-backend-tt4.herokuapp.com/",
    headers: {
      authorization: token,
    },
  });
};


// axiosWithAuth().post("api/register", newUser)
// supercharging axios 
