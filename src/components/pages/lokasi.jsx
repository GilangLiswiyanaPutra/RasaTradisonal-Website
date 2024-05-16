import React from 'react'
import { Link } from 'react-router-dom'
import Kota1 from '../../assets/semarang.png'
import Kota2 from '../../assets/solo.png'
import Kota3 from '../../assets/tegal.png'
import '../style/lokasi.css'

const images = [Kota1, Kota2, Kota3];
const links = ['/toko', '/', '/'];

const Lokasi = () => {
  return (
    <section id='lokasi'>
      <div className='title'>
        <h1>Daftar Lokasi</h1>
      </div>
      <div className='title-p'>
        <p className='lokasi-p'>Jelajahi Makanan Khas Daerah yang Kamu Cari</p>
      </div>
      <div className='prov'>
        <h2>Jawa Tengah</h2>
      </div>
      <div className="place-img">
            <div className='scroll-img'>
                {images.map((image, index) => (
                    <Link key={index} to={links[index]}>
                        <img src={image} alt={`Image ${index}`} />
                    </Link>
                ))}
            </div>
        </div>
    </section>
  );
}

export default Lokasi;

