import React from "react";

const Item = ({ title , price ,desc, img}) =>{
    return (
        <div className="details-div">
            <div className="img">
                <img src={img} alt={title} />
            </div>
            <div className="about">
                <div className="">
                    <h3>{title}</h3>
                    <h4> $ {price}</h4>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Item