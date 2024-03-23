import {} from 'phosphor-react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/storeItemsSlice'

export interface StoreItem{
    id:number,
    title:string,
    price:number,
    category:string,
    description:string,
    image:string
}

interface CardCartProps{
    key:number,
    storeItem:StoreItem,
    quantity:number
}


export const CartCard=(props:CardCartProps)=>{
    const dispatch=useDispatch();
    const handleDelete=()=>{
        dispatch(removeFromCart(props));
    }

    return (
        <div className="Card mt-2">
            <div className="item-image m-1">
                <div className="border-solid border-2 flex justify-center">
                <img className="w-56 h-80 hover:scale-110 duration-700 p-8" src={props.storeItem.image}/></div>
                <div className="firstRow flex justify-between mt-1">
                <div className="title text-xs truncate max-w-80">{props.storeItem.title}</div>
                </div>
                <div className="secondRow flex justify-between">
                <div className="price ">{props.storeItem.price}</div>
                <div className="quantity">{props.quantity}</div>
                <button onClick={handleDelete} className='flex'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg></button>
                </div>
            </div>
        </div>
    )
}