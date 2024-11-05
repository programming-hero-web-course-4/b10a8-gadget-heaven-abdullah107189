import { RiEqualizerLine } from "react-icons/ri";
import UseBanner from "../../Hooks/useBanner";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../Provider/CartContext";
const Dashboard = () => {
    const location = useLocation()
    const [isCart, setIsCart] = useState(true)
    useEffect(() => {
        if (location.pathname === '/dashboard/wishlist-section') {
            setIsCart(false)
        }
        else {
            setIsCart(true)
        }
    }, [location])
    const { cartItems } = useContext(CartContext)
    const result = cartItems.reduce((total, currenValue) =>
        total = total + currenValue.price
        , 0)
    return (
        <div>
            <UseBanner
                title={'Dashboard'}
            ></UseBanner>
            {
                isCart ?
                    <div className="flex justify-between items-center mt-4">
                        <h1 className="text-3xl font-bold">Cart</h1>
                        <div className="flex gap-4 items-center">
                            <h1 className="text-3xl font-bold">Total cost : {result}</h1>
                            <button className="pinkOutletBtn flex gap-2">Sort by Price <RiEqualizerLine className="rotate-90 text-[#9538E2] w-7 h-7" /></button>
                            <button className="!bgPink !text-white pinkOutletBtn  flex gap-2">Purchase</button>
                        </div>
                    </div>
                    :
                    <div className="flex justify-between items-center mt-4">
                        <h1 className="text-3xl font-bold">Wishlist</h1>
                    </div>
            }

            <Outlet></Outlet>

        </div >
    );
};

export default Dashboard;