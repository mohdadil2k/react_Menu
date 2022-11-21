import React from "react";
import Item from "./Item"

const SingleItems = ({items}) =>{
    return (
        <>
            {items.map((item)=>{
               return <Item key={item.id} {...item}/>
            })}
        </>
    )
}

export default SingleItems