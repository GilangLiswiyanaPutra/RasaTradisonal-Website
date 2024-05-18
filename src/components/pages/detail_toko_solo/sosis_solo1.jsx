import React from 'react';
import Map from '../../../assets/detail_toko_solo/map.png'
import Tokoimg from '../../../assets/detail_toko_solo/sosis1.png'
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
                          <h2>Sosis solo Yu NDIBEL</h2>
                          <p> 4.8⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Gremet No.9a, Manahan, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57139</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>081578361082</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@sosis_yundibel</p>
                    <a href="https://www.google.com/maps/search/Nasi+Liwet+Sukini,+Jl.+Parang+Kusumo+No.26,+Sondakan,+Kec.+Laweyan,+Kota+Surakarta,+Jawa+Tengah+57147" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default DetailToko;
