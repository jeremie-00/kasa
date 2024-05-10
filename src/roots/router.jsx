import React from "react";
import { createBrowserRouter, defer } from 'react-router-dom';

import RootOutlet from "./rootOutlet";
import PageError from "../pages/error"
import Home from "../pages/home";
import About from "../pages/about";
import Location from "../pages/location";


export default function Router() {

    const router = createBrowserRouter([
        {
            basename:'/kasa/',
            path: '/kasa/',
            element: <RootOutlet />,
            //affiche la page erreur si une erreur est capturée (url ou composent)
            errorElement: <PageError />,
            children: [
                {
                    path: '/kasa/',
                    element: <Home />,
                    loader: () => {
                        const data = fetch('./logements.json').then(response => response.json())
                        return defer({ data })
                    }
                },
                {
                    path: '/kasa/about',
                    element: <About />,
                    loader: () => {
                        const data = fetch('./texte_collaps.json').then(response => response.json())
                        return defer({ data })

                    }

                },
                {
                    path: '/kasa/location/:id',
                    element: <Location />,
                    loader: async ({ params }) => {
                        const data = await fetch('./logements.json').then(response => response.json())
                        const locationData = data.find((d) => d.id === params.id)
                        if (locationData) {
                            return defer({ locationData })
                        } else {
                            throw new Error("id logement non trouver")
                        }

                    }

                },

            ]
        }
    ])
    return router
}

