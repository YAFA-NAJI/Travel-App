import React from 'react';
import './footer.scss';
import video1 from '../../Assets/video.mp4';
import { FiSend, FiChevronRight } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video1} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input type='text' placeholder='Enter Email Address'/>
            <button className='btn flex' type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
                <MdTravelExplore className='icon'/> Travel.
              </a>
            </div>

            <div className='footerParagraph'>
              <p>Discover the world with us. We offer the best travel experiences and adventures to make your journey unforgettable.</p>
            </div>

            <div className='footerSocials flex'>
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
          </div>

          <div className='footerLinks grid'>
            {/* Our Agency Links */}
            <div className='linkGroup'>
              <span className='groupTitle'>OUR AGENCY</span>
              <ul>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Services
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Insurance
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Agency
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Tourism
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Payment
                </li>
              </ul>
            </div>

            {/* Partnership Links */}
            <div className='linkGroup'>
              <span className='groupTitle'>PARTNERSHIP</span>
              <ul>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Booking
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  RentCar
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  HostelWorld
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Trivago
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  TripAdvisor
                </li>
              </ul>
            </div>

            {/* Last Minute Links */}
            <div className='linkGroup'>
              <span className='groupTitle'>LAST MINUTE</span>
              <ul>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  London
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  California
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Indonesia
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Europe
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Oceania
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;