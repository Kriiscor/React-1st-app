import React from "react";

const Dish = ({Name , Price , Picture }) => {
    return (
        <div className="dish">
            <h2>{Name}</h2>
            <img src={Picture} alt=""/>
            <h3>{Price}</h3>
        </div>
    );

}
export default Dish ; 