const Footer = () => {
    return (
        <div className="max-w-[1440px] mx-auto pb-6  mt-20">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-2">Gadget Heaven</h1>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="text-center flex justify-around mt-10">
    <ul className="space-y-2">
        <p className="mb-2 font-bold">Services</p>
        <li><a href="#" className="hover:pink">Product Support</a></li>
        <li><a href="#" className="hover:pink">Order Tracking</a></li>
        <li><a href="#" className="hover:pink">Shipping & Delivery</a></li>
        <li><a href="#" className="hover:pink">Returns</a></li>
    </ul>
    <ul className="space-y-2">
        <p className="mb-2 font-bold">Company</p>
        <li><a href="#" className="hover:pink">About Us</a></li>
        <li><a href="#" className="hover:pink">Careers</a></li>
        <li><a href="#" className="hover:pink">Contact</a></li>
    </ul>
    <ul className="space-y-2">
        <p className="mb-2 font-bold">Legal</p>
        <li><a href="#" className="hover:pink">Terms & Services</a></li>
        <li><a href="#" className="hover:pink">Privacy Policy</a></li>
        <li><a href="#" className="hover:pink">Cookie Policy</a></li>
    </ul>
</div>

        </div>
    );
};

export default Footer;