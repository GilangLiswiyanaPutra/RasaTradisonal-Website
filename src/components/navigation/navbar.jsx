import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import '../style/navigation.css'

const navbar = () => {

  return (
    <nav>
      <div className="logo-container">
      <img src={logo} className='logo'/>
      </div>
    <ul>
      <li><Link to="/">Beranda</Link></li>
      <li><Link to="/Lokasi">Lokasi</Link></li>
      <li><Link to="/contact">Makanan & Minuman</Link></li>
      <li><Link to="/contact">Tentang Kami</Link></li>
    </ul>
  </nav>

   )
}

export default navbar;