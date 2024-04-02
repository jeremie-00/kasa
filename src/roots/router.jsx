import * as React from "react";
import { createBrowserRouter, defer } from 'react-router-dom';

import RootOutlet from "./rootOutlet";
import Home from "@pages/home";
function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootOutlet />,
            errorElement: <div>error</div>,
            children: [
                {
                    path: '/',
                    element: (
                        <>  
                            <Home />
                        </>
                    ),
                    errorElement: <div>error</div>,                 
                },
            ]
        }
    ])
    return router
}

export default Router;