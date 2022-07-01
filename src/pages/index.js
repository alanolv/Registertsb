import { Outlet } from "react-router-dom";
import NavbarApp from "../components/Navbar";
function Base(){
    return(
        <>
        <NavbarApp/>
        <Outlet/>
        </>
    );
}
export default Base;