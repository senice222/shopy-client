import './Slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = () => {
    return (
        <Swiper
            spaceBetween={12}
            loop={true}
            centeredSlides={true}
            slidesPerView={1.5}
            className="mySwiper main-slider__content"
        >
            {[...Array(6)].map((_, index) => (
                <SwiperSlide className="main-slider__slide" key={index}></SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
