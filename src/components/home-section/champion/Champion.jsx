import './champion.scss';
import HomeSection from '../HomeSection';
import { bg2, } from '../../../assets/images';
import championsData from '../../../assets/dummy';
import ChampionCard from './ChampionCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Champion = props => {
  return (
    <HomeSection
      className={`champion ${props.isActive ? 'active' : ''}`}
      classSectionContent="champion-content overlay"
      bgImage={bg2}
    >
      <div className="container">
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          grabCursor={true}
        >
          {
            championsData.map((item, index) => (
              <SwiperSlide key={index}>
                <ChampionCard item={item} id={index} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </HomeSection>
  );
}

export default Champion;
