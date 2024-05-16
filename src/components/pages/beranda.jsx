import React from 'react';
import Iconhome from '../../assets/home1.png'
import Kota1 from '../../assets/semarang.png'
import Kota2 from '../../assets/solo.png'
import Kota3 from '../../assets/tegal.png'
import Cardimg from '../../assets/imgabt.png'
import Cardimg2 from '../../assets/imgabt2.png'
import '../style/beranda.css'


const images = [Kota1, Kota2, Kota3];
const links = ['/toko', '/', '/'];

const Home = () => {
    return (
        <section id="home">
            <div className="home-container">
                <div className="home-title">
                    <h3 className="pre-title">Selamat Datang di</h3>
                    <h1 className="main-home">Rasa Tradisional</h1>
                    <p>Nikmati Rasa Nusantara: Satu Portal, Ribuan Kuliner Daerah!</p>
                    <button>Mulai</button>
                </div>
                <div className="image-right">
                    <img src={Iconhome} alt="logo" />
                </div>
            </div>
        </section>
    );
};

const DetailBr = () => {
    return(
        <section id="about">
      <div className="isi">
        <h1>Apakah yang Membuat Makanan Tradisional  Sangat Istimewa?</h1>
      </div>
      <div className="isi-paraf">
          <p>Ketika berkunjung ke suatu daerah, tentunya tidak lengkap jika tidak mencicipi makanan khas daerah tersebut. Berikut beberapa hal yang membuat makanan tradisional sangat istimewa</p>
      </div>
      <div className="card">
        <h2>Kelezatan yang Autentik</h2>
        <p>Makanan tradisional seringkali dibuat dengan resep turun-temurun dari generasi ke generasi. Karena itu, mereka memiliki rasa yang autentik dan khas yang sulit untuk ditiru oleh makanan modern.</p>
      </div>
        <img className='cardimg' src={Cardimg} alt="" />
        <img className='cardimg2' src={Cardimg2} alt="" />
      <div className="card2" >
        <h2>Identitas Makanan Tradisional</h2>
        <p>Makanan tradisional artinya dapat dikatakan sebagai identitas lokal karena keberadaannya yang menjadi bagian dari budaya masyarakat, seperti tata cara tertentu dalam mengolah bahan makanannya, perannya dalam budaya masyarakat dan tata perayaan, serta resep yang terjaga secara turun-temurun.</p>
      </div>
        
        {/* <img className="cr-right" src={Circle} alt="" />  */}
    </section>
    )
}

const LokasiBr = () => {
    return(
        <section id='place'>
        <div className="place-isi">
            <h1>Kota Mana yang Ingin Kamu Kunjungi?</h1>
        </div>
        <div className="place-paraf">
            <p>Setiap daerah di Indonesia memiliki makanan khasnya yang menawarkan berbagai macam makanan dan minuman tradisional yang unik dan kaya rasa. Berikut adalah daftar makanan tradisional dari beberapa daerah di Indonesia:</p>
        </div>
        <div className="place-img">
            <div className='scroll-img'>
                {images.map((image, index) => (
                    <a key={index} href={links[index]} rel="noopener noreferrer">
                        <img src={image} alt={`Image ${index}`} />
                    </a>
                ))}
            </div>
        </div>
        
    </section>
    )
}

const Beranda = () => {
    return (
        <div>
        <Home />
        <DetailBr />
        <LokasiBr />
        </div>
    )
}

export default Beranda;
