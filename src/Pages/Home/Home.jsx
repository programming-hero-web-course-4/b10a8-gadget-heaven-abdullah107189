import { Outlet, } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <div className="max-w-[1440px] mx-auto">
                <Outlet></Outlet>
                {/* <Products categoriesData={categoriesData}></Products> */}
            </div>

        </div>
    );
};

export default Home;