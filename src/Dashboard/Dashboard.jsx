import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-200 ">
                <div> 
                <a className="btn btn-ghost text-xl "> <span>DSCO.</span> <img className="w-12 rounded-full" src="https://media.istockphoto.com/id/480518610/zh/%E5%90%91%E9%87%8F/running-shoes-icon.jpg?s=1024x1024&w=is&k=20&c=El8si4EhW22ppjM9nOyA37mADk-0yrP4bqwWlWliWO4=" alt="" /> </a>

                </div>
            <ul className="menu font-medium">
                <li>  <NavLink to='/dashboard/dashboardHome'>Home</NavLink></li>

                <li>  <NavLink to='/dashboard/management'>Product Management</NavLink></li>

                <li>  <NavLink to='/dashboard/saleCollection'>Sale Collection</NavLink></li>

                <li>  <NavLink to='/dashboard/checkOut'> Check-Out</NavLink></li>
                <li>  <NavLink to='/dashboard/shopManagement'> Shop Management</NavLink></li>
                <li>  <NavLink to='/'> Menu</NavLink></li>

                <li>  <NavLink to= '/'>Log Out</NavLink></li>
                </ul>

        </div>
        
        <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;