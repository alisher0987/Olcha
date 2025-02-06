
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../assets/aEBfIUZM13Y57sK5nqsPjeqmAA60grRReBxuoYkMKvWHfKJ1dyN93Jn7bqLM.png"
import img2 from "../../assets/YdM8GruCsu65hlEp6PPiB56odh7qEv2N6Pj6ybrV4ZiWcpAQGwNAm8yJ8nA2.jpg"
import img3 from "../../assets/08L6BDqIEHLkzTJXQZhkunCn6rZQWjslpBNSDqu4wNXCa6ttuH7e40FsPWo3.jpg"
import 'swiper/css';
import 'swiper/css/autoplay';
import "./Banner.css"
import { Autoplay } from 'swiper/modules';


const Banner = () => {
  return (
    <div className="product-container">
      <div className="swiper-deal-wrapper">
        <div className="swiper-container">
          <Swiper 
            spaceBetween={10} 
            slidesPerView={1} 
            autoplay={{ delay: 3000 }} 
            modules={[Autoplay]}
          >
            <SwiperSlide><img src={img1} alt="Banner 1" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="Banner 2" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="Banner 3" /></SwiperSlide>
          </Swiper>
        </div>
      
      </div>
    </div>
  );
};

export default Banner