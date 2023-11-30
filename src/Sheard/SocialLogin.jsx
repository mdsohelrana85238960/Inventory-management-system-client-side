
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
// import { FcGoogle } from "react-icons/fc";
import useAuth from '../hooks/useAuth';
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from '../hooks/useAxiosPublic';

const SocialLogin = () => {
    const {googleLogin} = useAuth();
    const location = useLocation();
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic()
    
    
  
  
    
   const handleGoogleLogin = () =>{
    const from = location.state?.from?.pathname || '/createStore' 
    googleLogin()
    .then(result => {
      // console.log(result.user)
      const userInfo = {
        email : result.user?.email,
        name : result.user?.displayName
      }
      axiosPublic.post('/users', userInfo)
      .then(res => {
        swal("Good job!", "Login Successfully!", "success");
      navigate(from, {replace:true});
      })
    
      
    })
    .catch(error => console.error(error))
   }


    return (
        <div>
            
            <div onClick={handleGoogleLogin} className=' border rounded-md p-1  flex  gap-2  justify-center  mt-4 text-3xl text-blue-700 font-bold'> <h1 > <span className='text-center text-4xl'><FcGoogle /></span> </h1> Google </div>

        </div>
    );
};

export default SocialLogin;