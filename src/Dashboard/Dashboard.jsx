import { Link, NavLink, Outlet } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAxiosPublic from "../hooks/useAxiosPublic";



const Dashboard = () => {
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const {user,LogOut} = useAuth();
    const handleSignOut = () =>{
        LogOut()
        .then(result => {
            console.log(result)
            swal("Good job!", "Logout Successfully!", "success");
        })
      }

      const {data: users = [],refetch} = useQuery({
        queryKey:['userRole', user?.email],
        queryFn: async () =>{
            const res = await axiosPublic.get('/users');
            return res.data;
        }
    })
    
    const admin = users?.find(item => item?.email === user?.email )
   
    console.log(admin?.role)
   

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-200 ">
                <div> 
                <a className="btn btn-ghost text-xl "> <span>DSCO.</span> <img className="w-12 rounded-full" src="https://media.istockphoto.com/id/480518610/zh/%E5%90%91%E9%87%8F/running-shoes-icon.jpg?s=1024x1024&w=is&k=20&c=El8si4EhW22ppjM9nOyA37mADk-0yrP4bqwWlWliWO4=" alt="" /> </a>

                </div>
            <ul className="menu font-medium">
                {/* <li>  <NavLink to='/dashboard'>Home</NavLink></li> */}

                {/* <li>  <NavLink to='/dashboard/management'>Product Management</NavLink></li>
                <li>  <NavLink to='/dashboard/saleCollection'>Sales Collection</NavLink></li>
                <li>  <NavLink to='/dashboard/checkOut'> Check-Out</NavLink></li>

                <li>  <NavLink to='/dashboard/saleSummary'> Sales Summary </NavLink></li>
                <li>  <NavLink to='/dashboard/shopManagement'> Shop Management</NavLink></li> */}

               {
                admin?.role === "manager" && <>
                <li>  <NavLink to='/dashboard/management'>Product Management</NavLink></li>
                <li>  <NavLink to='/dashboard/saleCollection'>Sales Collection</NavLink></li>
                <li>  <NavLink to='/dashboard/checkOut'> Check-Out</NavLink></li>
                 </>
               }

               {
                admin?.role === "admin" && <>
                 <li>  <NavLink to='/dashboard/saleSummary'> Sales Summary </NavLink></li>
                <li>  <NavLink to='/dashboard/shopManagement'> Shop Management</NavLink></li>
                 </>
               }

                <li>  <NavLink to='/'> Menu</NavLink></li>
                <li onClick={handleSignOut} className="justify-center text-xl"> <Link > Logout </Link> </li>
                </ul>

        </div>
        
        <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;