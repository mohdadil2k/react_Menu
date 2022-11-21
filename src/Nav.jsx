import React from "react";

const Nav = ({allCat,filterItem})=>{
    return(
            <>    
            {allCat.map((navitem,index)=>{
                return <button className="child" key={index} onClick={()=>filterItem(navitem)}>{navitem}</button>
            })}
            </>
    )
}

export default Nav;