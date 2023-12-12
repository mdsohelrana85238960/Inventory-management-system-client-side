// import axios from "axios";

import axios from "axios";

// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'https://inventory-management-system-server-side.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;





// export const axiosSecure = axios.create({
//     baseURL: 'http://localhost:5000'
// })
// const useAxiosSecure = () => {
//     const navigate = useNavigate()
//     const {LogOut} = useAuth()
//     axiosSecure.interceptors.request.use(function (config){
//         const token = localStorage.getItem('access-token')
        
//         console.log('req stopped by interceptors',token)
//         config.headers.authorization = `Bearer ${token}`;
//         return config;
//     },function (error) {
//         return Promise.reject(error);
//     });
//     axiosSecure.interceptors.response.use(function(response){
//         return response
//     },async (error) =>{
//         const status = error.response.status;
//         // console.log('status error in the interceptors',status)
//         if (status === 401 || status === 403) {
//             await LogOut();
//          navigate('/login')
            
//         }
//         return Promise.reject(error);
//     })
//     return axiosSecure;
// };

// export default useAxiosSecure;