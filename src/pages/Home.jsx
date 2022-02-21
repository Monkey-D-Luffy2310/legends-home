import { Swiper, SwiperSlide } from 'swiper/react';
import { Welcome, Champion, ChampionDetail, Trailer, Credit } from '../components/home-section';
import ChampionsData from '../assets/dummy';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { EffectFade, Mousewheel, Pagination } from 'swiper';

const swiperOptions = {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: 'fade',
  modules: [Mousewheel, Pagination, EffectFade],
  speed: 1000
}

const Home = () => {

  return (
    <>
      <Swiper {...swiperOptions}>
        <SwiperSlide>
          {({ isActive }) => <Welcome isActive={isActive}/>}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Champion isActive={isActive}/>}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Trailer isActive={isActive}/>}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Credit isActive={isActive}/>}
        </SwiperSlide>
      </Swiper>
      {
        ChampionsData.map((item, index) => (
          <ChampionDetail item={item} key={index} id={index} />
        ))
      }
      <div className="scroll">
        Scrool to move
      </div>
    </>
  );
}

export default Home;
