import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Base from "../pages/index";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Admin from "../pages/Admin";
function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base/>}>
                    <Route index element={<Landing/>}/>
                    <Route path="/Landing" element={<Landing/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Register" element={<Register/>}/>
                    <Route path="/Dashboard" element={<Dashboard/>}/>
                    <Route path="/Admin" element={<Admin/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;