import { Helmet } from "react-helmet";
import Header from "./Header";


const Home = () => {
    return (
        <div >
            <Helmet >
            <title>Inventory | Home</title>
            </Helmet>
            <Header></Header>
        </div>
    );
};

export default Home;