import * as React from "react";
import { createBrowserRouter, defer } from 'react-router-dom';

import RootOutlet from "./rootOutlet";
import PageError from "@pages/error"
import Home from "@pages/home";
function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootOutlet />,
            errorElement: <PageError />,
            children: [
                {
                    path: '/',
                    element: (
                        <>  
                            <Home />
                        </>
                    ),
                    errorElement: <PageError />,                 
                },
            ]
        }
    ])
    return router
}

export default Router;