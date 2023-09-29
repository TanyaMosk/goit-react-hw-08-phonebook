import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Bar from "./AppBar";

export const Layout = () => {
    return (
        <div>
            <Bar/>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </div>  
    );
};

