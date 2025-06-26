
import axios from "axios";
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
  });


  // Add response interceptor for error handling
  axiosInstance.interceptors.response.use(
    (response) => {
      // Return successful responses as-is
      return response;
    },
    (error) => {
      // Handle errors
      if (error.response) {
       const{ status, data} = error.response;
       switch(status){
        case 400:
            console.log(data.message);
            break;
        case 401:
            console.log(data.message);
            break;
        case 404:
            console.log(data.message);
            break;
        case 500:
            console.log(data.message);
            break;
        default:
            console.log(`Error (${status}):`,data);
            break;
       }
      }else if(error.request){
        console.log("Network Error: No response received", error.request);
      }else{
        console.log("Error:", error.message);
      }
      
      // Pass the error along to be handled by the caller
      return Promise.reject({
        isAxiosError: true,
        message: error.response?.data?.message || error.message || "Unknown Error",
        data:error.response?.data,
    
      });
    }
  );

  export default axiosInstance;
