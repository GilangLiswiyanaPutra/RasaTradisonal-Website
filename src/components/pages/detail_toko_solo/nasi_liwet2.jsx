import React from 'react';
import Map from '../../../assets/detail_toko_solo/map.png'
import Tokoimg from '../../../assets/detail_toko_solo/liwet2.png'
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
                          <h2>Warung Lesehan Nasi Liwet Mbak Yanti Purwosari</h2>
                          <p> 4.5⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Dr. Rajiman, Sondakan, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57147</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>08122593088</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@nasiliwetmbyanti</p>
                    <a href="https://www.google.com/maps/search/Nasi+Liwet+Sukini,+Jl.+Parang+Kusumo+No.26,+Sondakan,+Kec.+Laweyan,+Kota+Surakarta,+Jawa+Tengah+57147" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default DetailToko;
