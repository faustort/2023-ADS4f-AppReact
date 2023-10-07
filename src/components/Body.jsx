import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Body(){
    return(
        <div>
            <Header />
            <Outlet />
            Footer
        </div>
    )
}