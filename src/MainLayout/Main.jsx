import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
const Main = () => {
    return (
        <div className=" ">
            <Navbar></Navbar>
            <div className="max-w-[1440px] mx-auto border">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;