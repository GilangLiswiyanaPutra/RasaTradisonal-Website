import React from 'react';
import Map from '../../../assets/toko_makanan_solo/map/serabi1.png'
import Tokoimg from '../../../assets/toko_makanan_solo/serabi1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const DetailToko = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/">
          <img src={Back} alt="" />
          </a>
        </div>
       <div className="map">
                    <img src={Map} alt="logo" />
                </div>
            <div className="toko-container">
                <div className="toko-title">
                  <div className="toko-img-rating">
                      <img src={Tokoimg} alt="" />
                      <div className="rating-container">
                          <h2>SERABI SOLO KLODRAN</h2>
                          <p> 5.0⭐⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Pasar, Plalangan, Klodran, Kec. Colomadu, Kabupaten Karanganyar, Jawa Tengah 57172</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>085640879972</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@tendabiru_solo</p>
                    <a href="https://maps.app.goo.gl/hLzxqNEsKaj3a1o97" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default DetailToko;