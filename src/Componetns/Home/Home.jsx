import React, { useEffect } from 'react';
import './home.scss';
import video from '../../Assets/video1.mp4';
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { IoIosList } from "react-icons/io";
import { TbApps } from "react-icons/tb";
import { SiTripadvisor } from "react-icons/si";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type='video/mp4'></video>

      <div className='homeContent container'>
        <div className='textDiv'>
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className='homeTitle'>
            Discover Your Perfect Holiday
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          {/* Destination Input */}
          <div className='destinationInput'>
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input 
                type="text" 
                placeholder='Enter destination...' 
                id="city"
              />
              <GrLocation className='icon' />
            </div>
          </div>

          {/* Date Input */}
          <div className='dateInput'>
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input 
                type="date" 
                id="date"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          {/* Price Range */}
          <div className='priceInput'>
            <div className='label_total flex'>
              <label htmlFor="price">Max Price:</label>
              <h3 className='total'>$3000</h3>
            </div>
            <div className="input flex">
              <input 
                type="range" 
                id="price"
                max="3000" 
                min="500" 
                defaultValue="3000"
                onChange={(e) => {
                  document.querySelector('.total').textContent = `$${e.target.value}`;
                }}
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="searchOptions flex">
            <button className="btn flex">
              <HiFilter className='icon' />
              <span>MORE FILTERS</span>
            </button>
          </div>
        </div>

        {/* Social Icons */}
        <div data-aos="fade-up"  className='homeFooterIcons flex'>
          <div className='rightIcons'>
            <FiFacebook className='icon' />
            <FaInstagram className='icon' />
            <SiTripadvisor className='icon' />
          </div>

          <div className='leftIcons'>
            <IoIosList className='icon' />
            <TbApps className='icon' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;