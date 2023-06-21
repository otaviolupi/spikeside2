"use client"

import { useState, useEffect, useContext, useRef } from 'react';
import Image from 'next/image'
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderCard = ({setItem}) => {
    const [card, setCard] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const handleClick = (index, it) => {
      console.log("Entrou")
      setCurrentIndex(index < 0 ? index + 6 : index - 6);
      sliderRef.current.slickGoTo(index < 0 ? index + 6 : index - 6);
      setItem(it);
    }

    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 13
    };

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get('https://valorant-api.com/v1/playercards');
          console.log(response)
          debugger;
          setCard(response.data.data);
          setTimeout(() => {
            if(card.length){
              handleClick(0, card[0])
            }
          }, 1000);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, []);

    return (
      <div className='w-[85%] my-0 mx-auto'>
        <Slider ref={sliderRef} {...settings}>
              {card.map((item, index) => (
                  <div key={item.uuid} onClick={() => handleClick(index, item)}>
                      <Image className='w-[100%]' src={item.smallArt} alt={item.displayName} width={100} height={100} />
                  </div>
              ))}
          </Slider>
      </div>
    );
  };

  export default SliderCard;


