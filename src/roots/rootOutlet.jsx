import { Outlet } from 'react-router-dom'
import Header from "../layouts/header/header";

export default function RootOutlet() {
    return <>
      <div className='main-container'>
        <Header />
        <section className='container'>
          <Outlet />
        </section>

      </div>
    </>
  }