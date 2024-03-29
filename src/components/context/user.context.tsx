import { createContext, useState } from "react";

//actual value we want to access
export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null,
})

export const UserProvider:any=({children}:any)=>{
    const [currentUser, setCurrentUser]=useState(null);
    const value:any={currentUser,setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}