import { Outlet } from 'react-router-dom'

export default function RootOutlet() {
    return <>
      <div className='main-container'>

        <section className='container'>
          <Outlet />
        </section>
        
      </div>
    </>
  }