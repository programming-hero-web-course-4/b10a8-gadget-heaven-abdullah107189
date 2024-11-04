import PropTypes from "prop-types";

const UseBanner = ({ title, pb = false, btn = true }) => {
    return (
        <div className="text-center bgPink relative">
            <div className={`max-w-[1440px] mx-auto p-10 ${(pb === true) ? 'pb-[150px]' : ''} text-white`}>
                <h1 className="text-4xl mb-6 font-bold text-white">{title}</h1>
                <p className="w-2/3 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className={`${btn === true ? 'flex' : 'hidden'} mt-3 gap-4`}>
                    <button className="pinkOutletBtn">Cart</button>
                    <button className="pinkOutletBtn">Wishlist</button>
                </div>
            </div>
        </div >
    );
};
UseBanner.propTypes = {
    title: PropTypes.string,
    pb: PropTypes.bool,
    btn: PropTypes.bool,
}
export default UseBanner;