import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import swal from "sweetalert";


const Navbar = () => {
    const {user,LogOut} = useAuth();

    const handleSignOut = () =>{
        LogOut()
        .then(result => {
            console.log(result)
            swal("Good job!", "Logout Successfully!", "success");
        })
      }
    const navLink = <>
               <li className="justify-center text-xl"> <Link to='/'> Home </Link> </li>
               <li className="justify-center text-xl"> <Link to='/createStore'> Create-Store </Link> </li>
               <li className="justify-center text-xl"> <Link to= '/watchDemo' > Watch Demo </Link> </li>
               
               {
                user ? <li className="justify-center text-xl"> <Link to='/dashboard'> Dashboard </Link> </li> : <> </>
               }
                {
                    user ? <> </> : <li className="justify-center text-xl"> <Link to='/register'> Register </Link> </li>
                }
              {
                user ?  <>  <li onClick={handleSignOut} className="justify-center text-xl"> <Link > Logout </Link> </li>  </> :  <li className="justify-center text-xl"> <Link to='/login'> Login </Link> </li>
              }
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl "> <span>DSCO.</span> <img className="w-12" src="https://media.istockphoto.com/id/480518610/zh/%E5%90%91%E9%87%8F/running-shoes-icon.jpg?s=1024x1024&w=is&k=20&c=El8si4EhW22ppjM9nOyA37mADk-0yrP4bqwWlWliWO4=" alt="" /> </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navLink}
          </ul>
        </div>
        <div className="navbar-end">
        {
            user ? <> <span className="text-xl font-medium"> {user?.displayName}</span> <img className="w-12 ml-2 rounded-full" src={user?.photoURL
            } alt="" /> </> : <>  </>
          }
        </div>
      </div>
    );
};

export default Navbar;