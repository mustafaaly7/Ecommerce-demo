import { auth } from "@/util/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";





export const UserContext = createContext()

export default function UserContextprovider({ children }) {
    const [User, setUser] = useState({
        email: null,
        isLogin: false
        , userid : null
    })
    useEffect(()=>{
onAuthStateChanged(auth,(user)=>{
    if(user){
        setUser({
            email : user.email , 
            isLogin : true ,
            userid : user.uid
        })
    }
    else{
        setUser({
            email: null,
            isLogin: false
            , userid : null
        })
    }
})

    },[])

    return (

        <UserContext.Provider value={{User,setUser}}>
            {children}
        </UserContext.Provider>


    )
}