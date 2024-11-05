import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import UseBanner from "../../Hooks/useBanner";
import { PiHeartStraightThin, PiShoppingCartThin } from "react-icons/pi";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useContext, } from "react";
import { CartContext } from "../../Provider/CartContext";
import Swal from "sweetalert2";

const ProductsDetails = () => {
    const { id } = useParams()
    const datas = useLoaderData()
    const findData = datas.find(data => data.product_id === id)
    const { product_title, product_image, price, description, specification, availability, rating } = findData;
    const navigate = useNavigate()

    // add to cart and wishlist function
    const { addToCart, addToWishlist, cartItems, wishlistItems } = useContext(CartContext);
    const handleAddToCart = (product) => {
        const checkCart = cartItems.includes(product)
        if (checkCart === true) {
            return Swal.fire({
                title: "Already added !",
                text: "Already added this product to Cart section!",
                icon: "warning"
            });
        }
        addToCart(product)
        Swal.fire({
            title: "Good job!",
            text: "Your cart added Cart Section!",
            icon: "success"
        });
    }
    const handleAddToWishlist = (product) => {
        const checkWishlist = wishlistItems.includes(product)
        const checkCart = cartItems.includes(product)
        if (checkCart === true) {
            return Swal.fire({
                title: "You added to Cart",
                text: "Already added this product to Cart!",
                icon: "error"
            });
        }
        if (checkWishlist === true) {
            return Swal.fire({
                title: "Already added !",
                text: "Already added this product to Wishlist section!",
                icon: "warning"
            });
        }
        addToWishlist(product)

        Swal.fire({
            title: "Good job!",
            text: "Your cart added Wishlist Section!",
            icon: "success"
        });
    }
 

    return (
        <div className="relative">

            <div>
                <UseBanner
                    title="All Products"
                    pb={true}
                    btn={false}
                ></UseBanner>
            </div>
            <button className="absolute pinkOutletBtn top-2 left-2" onClick={() => navigate(-1)}>Back</button>
            <div className="bg-[#F7F7F7] px-20  rounded-b-3xl">
                <div className=" flex items-center gap-10 bg-white rounded-2xl p-5 -top-[100px] relative shadow-lg">
                    <div className="w-[450px] h-[500px] border rounded-2xl">
                        <img className="w-full h-full object-contain" src={product_image} alt={product_title} />
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold">{product_title}</h1>
                        <p className="">Price : {price} $</p>
                        <div className="flex">
                            <div className="border rounded-full border-green-400 text-green-400 px-3 py-1">
                                {`${availability ? 'In Stock' : 'Out of Stoke'}`}
                            </div>
                        </div>
                        <p>{description}</p>
                        <div>
                            <p className="font-bold mb-2">Specification:</p>
                            {
                                specification.map((item, idx) => <p key={idx}>{idx + 1} . {' '}{item}</p>)
                            }
                        </div>
                        <div>
                            <p className="font-bold mb-2">Rating</p>
                            <div className="flex gap-4">
                                <Rating
                                    style={{ maxWidth: 150 }}
                                    value={rating}
                                    readOnly
                                />
                                <p className="px-3 py-1 rounded-full bg-gray-200 ">{rating}</p>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <button
                                    onClick={() => handleAddToCart(findData)}
                                    className="pinkOutletBtn !bgPink !text-white flex items-center gap-3">
                                    Add To Card
                                    < PiShoppingCartThin></PiShoppingCartThin>
                                </button>
                                <button
                                    onClick={() => handleAddToWishlist(findData)}
                                    className="p-4 shadow-lg border border-[#9538E2] rounded-full text-black flex items-center gap-3">
                                    <PiHeartStraightThin className="w-7 h-7"></PiHeartStraightThin>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;