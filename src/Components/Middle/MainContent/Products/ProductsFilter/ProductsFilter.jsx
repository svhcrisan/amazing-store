import React from "react";
import "./ProductsFilter.css";

const ProductsFilter = () => {
    return (
        <div className="body-right-2">
            <ul className="br2-left">
                <li>BRAND: <a href="">ALL BRANDS</a></li>
                <li>SKIN TYPE: <a href="">FOR OILY SKIN</a></li>
                <li>AGE: <a href="">FOR 30+</a></li>
            </ul>
            <ul className="br2-right">
                <li>SORT: <a href="">BY<br></br>POPULARITY</a></li>
            </ul>
        </div>

    )
}

export default ProductsFilter;