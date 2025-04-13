import React, {useEffect}from 'react';
import './main.scss';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'French Polynesia',
    grade: 'LUXURY RELAX',
    fees: '$1200',
    description: 'The epitome of romance with overwater bungalows and crystal-clear lagoons. Perfect for honeymooners and luxury travelers.',
    bestTime: 'May to October'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL ADVENTURE',
    fees: '$800',
    description: 'The lost city of the Incas nestled high in the Andes Mountains. A breathtaking archaeological wonder.',
    bestTime: 'April to October'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Grand Canyon',
    location: 'Arizona, USA',
    grade: 'NATURE ADVENTURE',
    fees: '$500',
    description: 'A massive gorge showing millions of years of geological history. Perfect for hiking and helicopter tours.',
    bestTime: 'March to May & September to November'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Santorini',
    location: 'Greece',
    grade: 'ROMANTIC GETAWAY',
    fees: '$900',
    description: 'Famous for white-washed buildings with blue domes, stunning sunsets, and volcanic beaches.',
    bestTime: 'June to September'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'HISTORIC MARVEL',
    fees: '$600',
    description: 'The iconic white marble mausoleum of eternal love.',
    bestTime: 'October to March'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Paris',
    location: 'France',
    grade: 'CULTURAL ROMANCE',
    fees: '$950',
    description: 'The City of Light, famous for the Eiffel Tower, Louvre Museum, and exquisite cuisine.',
    bestTime: 'April to June & September to October'
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Kyoto',
    location: 'Japan',
    grade: 'HISTORIC CULTURE',
    fees: '$850',
    description: 'Ancient temples, bamboo forests, and cherry blossoms.',
    bestTime: 'March to May & October to November'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Venice',
    location: 'Italy',
    grade: 'ROMANTIC CANALS',
    fees: '$850',
    description: 'The floating city of canals, gondolas, and Renaissance architecture.',
    bestTime: 'April to June & September to October'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Banff National Park',
    location: 'Canada',
    grade: 'MOUNTAIN PARADISE',
    fees: '$950',
    description: 'Stunning turquoise lakes and majestic Rocky Mountain peaks in Canada\'s first national park.',
    bestTime: 'June to August & December to March'
  },
];

const Main = () => {

    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  

  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 data-aos="fade-right"  className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className='secContent grid'>
        {data.map(({ id, imgSrc, destTitle, location, grade, fees, description, bestTime }) => {
          return (
            <div key={id} data-aos="fade-up" className="singleDestination">
              <div className='imageDiv'>
                <img src={imgSrc} alt={destTitle} />
                <div className="bestTime">
                  <span>Best Time: {bestTime}</span>
                </div>
              </div>

              <div className="cardInfo">
                <h3 className='destTitle'>{destTitle}</h3>
                <span className="continent flex">
                  <HiOutlineLocationMarker className='icon' />
                  <span className="name">{location}</span>
                </span>

                <div className='fees flex'>
                <div className='grade'>
                <span>{grade}<small>+1</small></span>
                </div>
                <div className="price">
                <h5>{fees}</h5>
                </div>
            </div>

                <div className="desc">
                    <p>{description}</p>
                </div>

                <button className='btn flex'>
                  DETAILS <HiOutlineClipboardCheck className='icon' />
                </button>


              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Main;