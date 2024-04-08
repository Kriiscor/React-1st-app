import React from "react";

const Dish = ({Nom , Prix , Image }) => {
    return (
        <div className="dish">
            <h2>{Nom}</h2>
            <img src={Image} alt=""/>
            <h3>{Prix}</h3>
        </div>
    );

}
export default Dish ; 