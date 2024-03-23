import { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { Outlet } from "react-router-dom";
import { Loader } from "../../components/loader";
export interface StoreItem {
    id: number;
    title: string;
    price: number;
    category: string;
    key:number;
    description: string;
    image: string;
  }
export const Shop = () => {
    const [storeItems,setStoreItems]=useState<any>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=25")
      .then((res) => res.json())
      .then((json) => setStoreItems([...json]));
  }, []);
  
  return <>
  <Outlet/>
  <div className="shop">
    <div className="shopItems grid grid-cols-4 gap-x-12 ml-2 mr-2">
    {storeItems.length>0?(storeItems.map((storeItem:StoreItem)=>{
        return (
            <>
            <Card key={storeItem.key} storeItem={storeItem}/>
            </>
        )
    })):<Loader/>}
    </div>
  </div>;
  </>
};
