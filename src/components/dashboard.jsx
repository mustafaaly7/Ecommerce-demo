import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./footer";


export default function Dashboard(){
    return(

        
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}