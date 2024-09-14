import React from "react";
import { createBrowserRouter, defer } from "react-router-dom";

import About from "../pages/about";
import PageError from "../pages/error";
import Home from "../pages/home";
import Location from "../pages/location";
import RootOutlet from "./rootOutlet";

export default function Router() {
  const router = createBrowserRouter([
    {
      // basename: "/kasa/",
      path: "/kasa/",
      element: <RootOutlet />,
      //affiche la page erreur si une erreur est capturée (url ou composent)
      errorElement: <PageError />,
      children: [
        {
          path: "/kasa/",
          element: <Home />,
          loader: async () => {
            const data = await fetch("/kasa/logements.json").then((response) =>
              response.json()
            );
            return defer({ data });
          },
        },
        {
          path: "/kasa/about",
          element: <About />,
          loader: async () => {
            const data = await fetch("/kasa/texte_collaps.json").then(
              (response) => response.json()
            );
            return defer({ data });
          },
        },
        {
          path: "/kasa/location/:id",
          element: <Location />,
          loader: async ({ params }) => {
            const data = await fetch("/kasa/logements.json").then((response) =>
              response.json()
            );
            const locationData = data.find((d) => d.id === params.id);
            if (locationData) {
              return defer({ locationData });
            } else {
              throw new Error("id logement non trouver");
            }
          },
        },
      ],
    },
  ]);
  return router;
}
