import * as React from "react";
import { RouterProvider } from 'react-router-dom'
import './App.scss'

import Router from "@roots/router";

function App() {
  const router = Router()
  return <RouterProvider router={router} />
}

export default App;