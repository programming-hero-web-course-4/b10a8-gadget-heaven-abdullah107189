import PropTypes from "prop-types";

const Products = ({ categoriesData }) => {
    return (
        <div className="relative -top-[200px]">
            <h1 className="text-4xl font-bold text-center mb-12">Explore Cutting-Edge Gadgets</h1>
            <div className="grid md:grid-cols-5 gap-3">
                {/* left side  */}
                <div className=" md:col-span-1">
                    <div className="shadow-lg border rounded-xl p-3 flex flex-col gap-3">
                        <div className="p-3 btn rounded-full w-full hover:pinkOutletBtn">All</div>
                        {
                            categoriesData.map(category => <div
                                className="p-3 border btn rounded-full w-full hover:pinkOutletBtn"
                                key={category.category_id}
                            >
                                {category.category_name}</div>)
                        }
                    </div>
                </div>
                {/* right side  */}
                <div className="h-44 border md:col-span-4">

                </div>
            </div>
        </div>
    );
};
Products.propTypes = {
    categoriesData: PropTypes.array.isRequired,
}
export default Products;