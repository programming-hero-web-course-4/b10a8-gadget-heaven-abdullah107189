import { NavLink } from 'react-router-dom';
import bgImage from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className=''>
            <div className="bgPink py-10 pb-[320px] relative -top-1 rounded-b-2xl">
                <div className="w-3/4 mx-auto space-y-6 text-center text-white">
                    <h1 className="text-6xl font-semibold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="w-4/5 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <NavLink to="/dashboard"> <button className="pinkOutletBtn mt-5">Shop Now</button></NavLink>
                </div>
            </div>
            <div className='md:w-[1062px] md:h-[563px] mx-auto p-4 rounded-3xl bg-white/20 border-2 border-white relative -top-[280px]'>
                <img className='w-full h-full object-cover rounded-2xl' src={bgImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;