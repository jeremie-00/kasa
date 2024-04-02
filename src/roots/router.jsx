import * as React from "react";
import { createBrowserRouter, defer } from 'react-router-dom';

import RootOutlet from "./rootOutlet";
import PageError from "@pages/error"
import Home from "@pages/home";
import About from "@pages/about";

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
                    loader: () => {
                        const data = fetch('/logements.json').then(response => response.json())
                        return defer({ data })
                    }                
                },
                {
                    path: '/about',
                    element: (
                        <>  
                            <About />
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