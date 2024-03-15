import * as React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { UserIndexPages } from "../pages/User";
import DashboardLayout from "../layout";

const DashboardRoute = () => {
    let route = useRoutes([
        {
            element:
                <DashboardLayout>
                    <React.Suspense>
                        <Outlet />
                    </React.Suspense>
                </DashboardLayout>,
            children: [
                { element: <Dashboard />, index: true },
                { path: "users", element: <UserIndexPages /> },
            ],
        },
        // { path: "team", element: <AboutPage /> },
    ]);

    return route;
}
export default DashboardRoute;