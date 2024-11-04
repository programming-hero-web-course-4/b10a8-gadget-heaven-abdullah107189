import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleProductCard from "../SIngleProductCard/SingleProductCard";

const AllProductsByCategory = () => {
    const [allData, setAllData] = useState([])
    const { category } = useParams()
    const loadAllProducts = useLoaderData()
    useEffect(() => {
        if (category) {
            const filterData = [...loadAllProducts].filter(items => items.category === category)
            setAllData(filterData)
        }
        else {
            setAllData(loadAllProducts)
        }
    }, [loadAllProducts, category])
    console.log(allData);
    return (
        <div>
            <div className="grid grid-cols-3 gap-3">
                {
                    allData.map(items => <SingleProductCard
                        key={items.product_id}
                        items={items}
                    ></SingleProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProductsByCategory;