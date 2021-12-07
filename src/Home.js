import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/Nov/1335887_1500xH_final-copy_v2_01.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="US Polo Association"
            price={499}
            image="https://m.media-amazon.com/images/I/81kzjhOHaiL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="OnePlus 9R 5G (Lake Blue, 8GB RAM, 128GB Storage)"
            price={39999}
            image="https://m.media-amazon.com/images/I/61Q5U3dzCKL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="iQOO Z5 5G (Cyber Grid, 8GB RAM, 128GB Storage) | Snapdragon 778G 5G Processor | 5000mAh Battery | 44W FlashCharge"
            price={23599}
            image="https://m.media-amazon.com/images/I/51stc0XU7sL._SL1200_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch 400 Nits Peak Brightness Metal Body 8 Days Battery Life with 24*7 Heart Rate monitoring IPX7 with Blood Oxygen, Fitness, Sports & Sleep Tracking (Black)"
            price={5000}
            image="https://m.media-amazon.com/images/I/61T28Xx8b5L._SL1500_.jpg"
            rating={3}
          />
          <Product
            id="5"
            title="Sony Digital Vlog Camera ZV 1 (Compact, Video Eye AF, Flip Screen, in-Built Microphone, Bluetooth Shooting Grip, 4K Vlogging Camera and Content Creation) - Black"
            price={59999}
            image="https://m.media-amazon.com/images/I/61EGyktwgTL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Sony Digital Vlog Camera ZV 1 (Compact, Video Eye AF, Flip Screen, in-Built Microphone, Bluetooth Shooting Grip, 4K Vlogging Camera and Content Creation) - Black"
            price={59999}
            image="https://m.media-amazon.com/images/I/61EGyktwgTL._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
