import { Swiper, SwiperSlide } from 'swiper/react';



import './Carousel.css';

// import required modules
import { Pagination } from 'swiper/modules';


export default function Carousel() {
    const pagination = {
        clickable: true,
        renderBullet: function (index:any, className: any) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://www.furniturestoreni.co.uk/cdn/shop/files/1_e4a4998d-a8b7-4f57-95a7-63ef22eb65d1.jpg?v=1731672655&width=1400" alt="01" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.furniturevillage.co.uk/i/fv/16023_ClearanceBannerMobile?fmt=auto" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                        <img src="https://www.cookesfurniture.co.uk/images/pages/27344-2102-AutumnSaleHomepageSofasMobileBanner.png" alt="" />
                </SwiperSlide>
        
            </Swiper>
        </>
    );
}