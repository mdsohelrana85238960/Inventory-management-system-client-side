import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://inventory-management-system-server-side.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;