import axios, { AxiosError } from "axios";

const API_URL ="https://psychic-giggle-jj9wv64ggjg2p6w4-3000.app.github.dev/api";

export const getSesmicData = async (city: string): Promise<SesmicData> => {
  return new Promise<SesmicData>((resolve, reject) => {
    axios
      .get(`${API_URL}/sesmic/${city}`)
      .then((res) => {
        resolve({
          city: city,
          magnitude: res.data.magnitude,
          latitude: res.data.latitude,
          longtitude: res.data.lontitude,
          
        });
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 404) {
            reject("City not found");
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
