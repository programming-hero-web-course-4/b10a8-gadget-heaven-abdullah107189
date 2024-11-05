import { RiEqualizerLine } from "react-icons/ri";
import UseBanner from "../../Hooks/useBanner";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../Provider/CartContext";
import logo from '../../assets/Group.png'
import { Helmet } from "react-helmet-async";
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
    const { cartItems, sortByPrice, setCartItems } = useContext(CartContext)
    const result = cartItems.reduce((total, currenValue) =>
        total = total + currenValue.price
        , 0)
    const handleSortByPrice = () => {
        sortByPrice()
    }

    const handlePurchase = () => {
        document.getElementById('my_modal_1').showModal()

    }
    const navigate = useNavigate();
    const redirectGoToHome = () => {
        setCartItems([])
        navigate('/', { replace: true });
    }
    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadget-shop</title>
            </Helmet>
            <UseBanner
                title={'Dashboard'}
            ></UseBanner>
            {
                isCart ?
                    <div className="flex justify-between items-center mt-4" >
                        <h1 className="text-3xl font-bold">Cart</h1>
                        <div className="flex gap-4 items-center">
                            <h1 className="text-3xl font-bold">Total cost : {result}</h1>
                            <button
                                onClick={() => handleSortByPrice()}
                                className="pinkOutletBtn flex gap-2">Sort by Price <RiEqualizerLine className="rotate-90 text-[#9538E2] w-7 h-7" />
                            </button>
                            <button
                                onClick={() => handlePurchase()}
                                className="!bgPink !text-white pinkOutletBtn  flex gap-2">
                                Purchase
                            </button>
                        </div>
                    </div>
                    :
                    <div className="flex justify-between items-center mt-4">
                        <h1 className="text-3xl font-bold">Wishlist</h1>
                    </div>
            }

            <Outlet></Outlet>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box flex flex-col items-center text-center">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Payment Successfully</h1>
                        <div className="py-3">
                            <hr />
                        </div>
                        <p>Thanks for purchasing.</p>
                        <p>Total : {result}</p>
                    </div>
                    <div className="modal-action justify-center">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <div className="flex gap-10">
                                <button onClick={() => redirectGoToHome()} className="pinkOutletBtn">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div >
    );
};

export default Dashboard;