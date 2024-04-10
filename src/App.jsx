import { RouterProvider } from 'react-router-dom'
import './App.scss'

import Router from "@roots/router";
import Spinner from "@components/spinner";
export default function App() {
  const router = Router()
  return <RouterProvider router={router}/>
}
