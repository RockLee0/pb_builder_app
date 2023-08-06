import React from 'react';
import { Carousel, Image } from 'antd';
const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#000000',
  
};
const Banner = () => (
  <Carousel autoplay >
    <div>
      <h3 style={contentStyle}>
        <Image  alt='computer image 1' src='https://www.startech.com.bd/image/cache/catalog/home/banner/free-delivery-on-app-may-home-banner-982x500.webp'></Image>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Image alt='image 2' src='https://www.startech.com.bd/image/cache/catalog/home/banner/gigbyte-month-live-now-home-banner-982x500.webp'> </Image>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Image alt='image 3' src='https://www.cloud.ryanscomputers.com/cdn/sliders/Asus-TUF-Gaming-VG247Q1Abanner_1690777301.webp'> </Image>
      
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Image alt='image 4' src='https://cloud.ryanscomputers.com/cdn/sliders/HP-Pro-M183fw-Multifunction-Color-Laser-Printer-Banner_1690958824.webp'> </Image>
      </h3>
    </div>
  </Carousel>
);
export default Banner;