import React from 'react';
import Map from '../../assets/map.png'
import Tokoimg from '../../assets/toko-img.png'
import Back from '../../assets/back.png'
import { IoMdCall, IoLogoInstagram } from "react-icons/io";

import '../style/toko.css'

const DetailToko = () => {
  return (
    <section id="toko">
        <div className='back'>
          <img src={Back} alt="" />
        </div>
       <div className="map">
                    <img src={Map} alt="logo" />
                </div>
            <div className="toko-container">
                <div className="toko-title">
                  <div className="toko-img-rating">
                      <img src={Tokoimg} alt="" />
                      <div className="rating-container">
                          <h2>Nasi Liwet Sukini</h2>
                          <p> 4.7⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Parang Kusumo No.26, Sondakan, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57147</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p> <IoMdCall /> 0819081098080</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p> <IoLogoInstagram /> @blablabla</p>
                    <a href="https://www.google.com/maps/search/Nasi+Liwet+Sukini,+Jl.+Parang+Kusumo+No.26,+Sondakan,+Kec.+Laweyan,+Kota+Surakarta,+Jawa+Tengah+57147" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default DetailToko;
