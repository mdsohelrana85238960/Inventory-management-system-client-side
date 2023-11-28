import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="flex gap-10 flex-col justify-center items-center h-screen">
            <Link  to='/' > <button className="btn btn-primary">Go to Home</button> </Link>
            <img className="mx-auto w-[800px]" src="https://www.seekahost.com/wp-content/uploads/2017/11/404-page-not-found.jpg" alt="" />
        </div>
        </div>
    );
};

export default ErrorPage;