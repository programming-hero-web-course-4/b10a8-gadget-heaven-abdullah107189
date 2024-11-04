import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Products from "../../Components/Products/Products";

const Home = () => {
    const categoriesData = useLoaderData()
    console.log(categoriesData)
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-[1440px] mx-auto">
                <Products categoriesData={categoriesData}></Products>
            </div>

        </div>
    );
};

export default Home;