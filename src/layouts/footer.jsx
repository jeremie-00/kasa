import logoFooter from '@assets/logo_footer.png'

export default  function Footer() {
  return <footer className='footer'>
    <img className='logo' src={logoFooter} alt='logo kasa' />
    <p className='text'>© 2024 Kasa. All <span>rights reserved</span></p>
  </footer>
}
