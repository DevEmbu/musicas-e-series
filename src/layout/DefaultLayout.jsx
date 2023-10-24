import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useDeferredValue } from "react";

{/* DEFAULT LAYOUT */}

function DefaultLayout(){

    return(
        <>
         <Header />
         <Outlet />
        </>
    )
}
export default DefaultLayout