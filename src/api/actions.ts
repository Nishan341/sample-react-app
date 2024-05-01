import axios, { AxiosError } from "axios";

const API_URL ="https://psychic-giggle-jj9wv64ggjg2p6w4-3000.app.github.dev/api";

export const getBobaData = async (drink: string): Promise<BobaData> => {
  return new Promise<BobaData>((resolve, reject) => {
    axios
      .get(`${API_URL}/boba/${drink}`)
      .then((res) => {
        resolve({
          drink: drink,
          sugar: res.data.sugar,
          milk: res.data.milk,
          Tapioca: res.data.Tapioca,
          ice: res.data.ice,
          
        });
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 404) {
            reject("Boba tea not found");
          } else {
            // It's a good practice to reject with an Error object
            reject(axiosError.message);
          }
        } else {
          // Handle non-Axios errors
          reject("An unknown error occurred");
        }
      });
      
  });
  

};
