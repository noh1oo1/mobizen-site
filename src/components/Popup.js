import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Popup = () =>{

	const popupClose = () =>{
		document.querySelector('.mySwiper').remove();
	}

	return(
		<>
		<Swiper pagination={true} modules={[Pagination]} className="mySwiper">
		  <SwiperSlide className='slider'>
			<div className='slideA'></div>
		  </SwiperSlide>
		  <SwiperSlide className='slider'>
			<div className='slideB'></div>
		  </SwiperSlide>
		  <div className="popup-close" onClick={popupClose}>X</div>
		</Swiper>
	  </>
	);
}

export default Popup;