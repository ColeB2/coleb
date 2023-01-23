import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css/bundle';
// swiper core styles
import 'swiper/css';
import './Carousel.css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from '../Card/Card';

interface projectData {

}

interface CarouselProps {
    data: [];
    techId: number;
    title: string;
    handleClick: (id: number, data: []) => void;
}

const Carousel = (props: CarouselProps) => 
    props.data.length !== 0 && (
        <div className='' key={props.techId}>
            <h5>{props.title}</h5>
            <Swiper
                modules={[Navigation, Pagination]}
                direction={'horizontal'}
                spaceBetween={0}
                freeMode={true}
                slidesPerView={'auto'}
                // loop={true}
                // slidesPerGroupAuto
                slidesPerGroupAuto={true}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                }}
                navigation={{}}
            >
                {props.data.map((item, idx: number) => {
                    return (
                        <SwiperSlide key={idx}>
                            
                            <Card
                                key={item.id}
                                handleClick={
                                    () => props.handleClick(
                                        item.id,
                                        props.data
                                        )}
                                {...item}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>

        </div>
    );

export default Carousel;
