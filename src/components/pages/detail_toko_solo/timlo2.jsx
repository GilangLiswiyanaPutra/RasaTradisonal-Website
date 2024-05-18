import React from 'react';
import Map from '../../../assets/detail_toko_solo/map.png'
import Tokoimg from '../../../assets/detail_toko_solo/timlo2.png'
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
                          <h2>Warung Selat Mbak Lies</h2>
                          <p> 4.4⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Yudhistira No.9, Serengan, Kec. Serengan, Kota Surakarta, Jawa Tengah 57155</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>08271653332</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@selat.mbaklies</p>
                    <a href="https://www.google.com/maps/search/Nasi+Liwet+Sukini,+Jl.+Parang+Kusumo+No.26,+Sondakan,+Kec.+Laweyan,+Kota+Surakarta,+Jawa+Tengah+57147" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default DetailToko;
