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
      <li><Link to="/toko">Makanan & Minuman</Link></li>
      <li><Link to="/Tentang_kami">Tentang Kami</Link></li>
      <li><Link to="/Masuk">Masuk</Link></li>
    </ul>
  </nav>

   )
}

export default navbar;