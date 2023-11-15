import { Outlet } from "react-router-dom";
import Header from "../components/Header";


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