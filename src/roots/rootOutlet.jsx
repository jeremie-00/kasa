import { Outlet } from 'react-router-dom'
import Header from "@layouts/header/header";
import Footer from "@layouts/footer/footer";

export default function RootOutlet() {
    return <>
      <div className='main-container'>
        <Header />
        <section className='container'>
          <Outlet />
        </section>
        <Footer />
      </div>
    </>
  }