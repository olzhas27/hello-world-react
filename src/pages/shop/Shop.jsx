import Layout from "../layout/Layout";
import ShopContent from "./content/ShopContent";
import {useSearchParams} from "react-router-dom";

const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const clothingType = searchParams.get("type");
    return (
        <Layout>
            <ShopContent/>
        </Layout>
    )
};

export default Shop;