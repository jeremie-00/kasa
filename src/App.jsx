import { RouterProvider } from 'react-router-dom'
import './App.scss'

import Router from "/src/roots/router";

export default function App() {
  const router = Router()
  return <RouterProvider router={router}/>
}
