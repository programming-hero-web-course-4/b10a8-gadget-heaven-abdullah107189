import PropTypes from "prop-types";
import { TiDeleteOutline } from "react-icons/ti";
const SingleWishListCard = ({ items }) => {
    const { product_title, product_image, price, description, } = items;
    return (
        <div className="p-5 shadow-lg mb-4 border rounded-xl flex gap-20">
            <div className="w-[400px] h-[200px] shadow-md rounded-xl">
                <img className="w-full h-full object-contain" src={product_image} alt={product_title} />
            </div>
            <div className="flex justify-between w-full pr-10">
                <div className="space-y-3">
                    <h1 className="text-2xl font-bold">{product_title}</h1>
                    <p>{description}</p>
                    <p className="font-bold">Price : {price} $</p>
                    <button className="pinkOutletBtn">Add To Card</button>
                </div>
                <div className="">
                    <button className="">
                        <TiDeleteOutline className="w-16 h-16 p-2 text-red-400" />
                    </button>
                </div>
            </div>
        </div>
    );
};

SingleWishListCard.propTypes = {
    items: PropTypes.object.isRequired,
}
export default SingleWishListCard;