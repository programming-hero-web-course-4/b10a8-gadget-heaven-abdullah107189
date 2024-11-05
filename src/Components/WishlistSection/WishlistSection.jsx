import { useContext } from "react";
import { CartContext } from "../../Provider/CartContext";
import SingleWishListCard from "../SingleWishListCard/SingleWishListCard";

const WishlistSection = () => {
    const { wishlistItems } = useContext(CartContext)
    return (
        <div className="mt-5">
            {
                wishlistItems.map(items => <SingleWishListCard key={items.product_id} items={items}></SingleWishListCard>)
            }
        </div >
    );
};

export default WishlistSection;