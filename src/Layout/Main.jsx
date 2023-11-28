import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";



const Main = () => {
    const location = useLocation();
    const noNavFot = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div className="max-w-7xl mx-auto overflow-hidden">
            { noNavFot || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noNavFot || <Footer></Footer>}
        </div>
    );
};

export default Main;