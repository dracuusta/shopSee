import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductTile } from '../../components/productTile';
import { Loader } from '../../components/loader';
interface ProductItme{
  key:number,
  id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}
function Product() {
  const defaultItem: ProductItme = {
    key:0,
    id: 0,
    title: '',
    price: 0,
    category: '',
    description: '',
    image: '',
  };
  let { product } = useParams();
  const [loading,setLoading]=useState(true);
  const [storeItem,setStoreItems]=useState<ProductItme>(defaultItem);
  useEffect(()=>{
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${product}`)
            .then(res=>res.json())
            .then(json=>{setStoreItems(json)
            setLoading(false);
            })
  },[product])
  return loading===false?(<ProductTile storeItem={storeItem}></ProductTile>):(
    <Loader/>
  )

}

export default Product;