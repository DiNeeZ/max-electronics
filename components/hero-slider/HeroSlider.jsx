import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideItem from './slide-item/SlideItem';
import { heroSlider } from '@/data';
import 'swiper/scss';
import 'swiper/scss/pagination';
import styles from './hero-slider.module.scss';
import * as ReactDOMServer from 'react-dom/server';

SwiperCore.use([Pagination]);

const HeroSlider = () => {
  return (
    <div className={styles.heroSlider}>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        pagination={{
          el: '.pagination',
          renderBullet: function (index, className) {
            return ReactDOMServer.renderToStaticMarkup(<li className={className}></li>);
          },
          bulletClass: styles.bullet,
          bulletActiveClass: styles.active,
          clickable: true
        }}>
        {heroSlider.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SlideItem slide={slide} />
          </SwiperSlide>
        ))}
        <ul className={`${styles.pagination} pagination`}></ul>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
