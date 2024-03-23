import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './navbar.css'
import { useContext, useEffect, useState } from 'react'
import { FC } from 'react'
import { signOutUser } from '../utils/firebase/firebase.utils'
import { UserContext } from '../components/context/user.context'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
export const Navbar:FC=()=>{
    const {currentUser,setCurrentUser}:any=useContext(UserContext);
    const [totalQuantity,setTotalQuantity]=useState(0);
    const signOutHandler=async()=>{
        await signOutUser();
       setCurrentUser(null);
    }
    
    const cartItems = useSelector((state:RootState) => {
        return state.shop.cartItems;
    });
    useEffect(()=>{
        let totalQuantity=0;
        cartItems.forEach((cartItem)=>{
            totalQuantity+=cartItem.quantity;
        })
        setTotalQuantity(totalQuantity);
    },[cartItems])
    
    return (
       <div className='navbar'>
            <div className='links flex z-50 fixed w-screen flex-row justify-end gap-0  p-4 border-solid text-white bg-neutral-800'>
                <Link className='w-12' to="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></Link>
                <Link className='w-16' to="/shop">Shop</Link>
                <Link className='w-16' to="/cart">
                   <div className='flex'> <ShoppingCart size={32}/><div>{totalQuantity}</div></div>
                </Link>
                {currentUser?(<button className='w-26' onClick={signOutHandler}>Sign Out</button>):
                (<button className='w-16'><Link to="/Authentication">Sign In</Link></button>)}
            </div>
       </div>
    )
}