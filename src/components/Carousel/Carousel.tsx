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

import { projectType } from '../../types/customTypes';

interface CarouselProps {
    id: number;
    title: string;
    data: projectType[];
    handleClick: (id: number, data: projectType[]) => void;
    handleEnter: (id: number, data: projectType[], e: React.KeyboardEvent<HTMLDivElement>) => void;
    // handleEnter: React.KeyboardEventHandler<HTMLDivElement>
    // handleEnter: (id: number, data: projectType[]) => void;
}

const Carousel = (props: CarouselProps) => 
    // props.data.length !== 0 && 
    (
        <div className='swiper-div' key={props.id}>
            <h5>{props.title}</h5>
            <Swiper
                modules={[Navigation, Pagination]}
                direction={'horizontal'}
                spaceBetween={0}
                // freeMode={true}
                rewind={true}
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
                                handleEnter={
                                    (e: React.KeyboardEvent<HTMLDivElement>) => props.handleEnter(
                                        item.id,
                                        props.data,
                                        e
                                    )
                                }
                                {...item}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>

        </div>
    );

export default Carousel;
