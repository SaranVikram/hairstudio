"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import LocationCard from "@/shortcodes/LocationCard";

const VijayawadaBranch = {
  location: "Vijayawada",
  address:
    "DOOR NO 40-6/1-15A/1\nPARK STREET,\nREVENUE COLONY, MOGALRAJAPURAM.",
  phone: "(+91) 6303259766",
  googleMaps: "https://goo.gl/maps/ESVYpb9QagxaV2qM9",
  facebook: "https://www.facebook.com/rockzhairstudio/",
  instagram: "https://www.instagram.com/rockzhairstudio/",
};

const hydbranch = {
  location: "Hyderabad",
  address:
    "DOOR NO 40-6/1-15A/1\nPARK STREET,\nREVENUE COLONY, MOGALRAJAPURAM.",
  phone: "(+91) 6303259766",
  googleMaps: "https://goo.gl/maps/ESVYpb9QagxaV2qM9",
  facebook: "https://www.facebook.com/rockzhairstudio/",
  instagram: "https://www.instagram.com/rockzhairstudio/",
};

const vizagBranch = {
  location: "Visakhapatnam",
  address:
    "DOOR NO 40-6/1-15A/1\nPARK STREET,\nREVENUE COLONY, MOGALRAJAPURAM.",
  phone: "(+91) 6303259766",
  googleMaps: "https://goo.gl/maps/ESVYpb9QagxaV2qM9",
  facebook: "https://www.facebook.com/rockzhairstudio/",
  instagram: "https://www.instagram.com/rockzhairstudio/",
};
const LocationCards = () => {
  return (
    <>
      <section className="section pt-8">
        <div className="container">
          <div className="row justify-center">
            <div className="col-12 ">
              <p className="text-[20px] leading-8 tracking-wide md:text-2xl font-black text-black mb-6 ">
                Visit Our Nearest Branch
              </p>
              <Swiper
                slidesPerView={1.2}
                navigation={true}
                centeredSlides={false}
                spaceBetween={12}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                  },
                }}
              >
                <SwiperSlide>
                  <LocationCard branch={VijayawadaBranch} />
                </SwiperSlide>
                <SwiperSlide>
                  <LocationCard branch={hydbranch} />
                </SwiperSlide>
                <SwiperSlide>
                  <LocationCard branch={vizagBranch} />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationCards;
