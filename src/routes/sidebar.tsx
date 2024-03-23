import { FC, useEffect, useState } from "react"
import { StoreItem } from "../components/card"

export const Sidebar:FC=()=>{
    const [mappedSet,setMappedSet]=useState<Set<String>>(new Set());
    useEffect(()=>{
          fetch("https://fakestoreapi.com/products?limit=25")
            .then((res) => res.json())
            .then((json) => {
                const mapper=json.map((item:StoreItem)=>{
                    return item.category;})
               let mappedSet=new Set<String>(mapper);
                    setMappedSet(mappedSet);
            })},[])



    return (
        <>
        {
            mappedSet.size>0?(Array.from(mappedSet).map((item,index)=>{
             return   <div key={index}>{item}</div>
            })):<div>loading</div>
        }
        </>
    )
}