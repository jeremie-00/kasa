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
            //affiche la page erreur si une erreur est capturée (url ou composent)
            errorElement: <PageError />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                    loader: () => {
                        const data = fetch('/logements.json').then(response => response.json())
                        return defer({ data })
                    }
                },
                {
                    path: '/about',
                    element: <About />,
                    loader: () => {
                        const data = fetch('/texte_collaps.json').then(response => response.json())
                        return defer({ data })
                    }

                },
            ]
        }
    ])
    return router
}

export default Router;