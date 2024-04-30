import axios, { AxiosError } from "axios";

const API_URL ="https://zany-acorn-jjrjvqwpv65x25rq5-3000.app.github.dev/api";

export const getSesmicData = async (city: string): Promise<SesmicData> => {
  return new Promise<SesmicData>((resolve, reject) => {
    axios
      .get(`${API_URL}/sesmic/${city}`)
      .then((res) => {
        resolve({
          city: city,
          magnitute: res.data.magnitute,
          latitude: res.data.latitude,
          longtitude: res.data.longtitude,
          
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