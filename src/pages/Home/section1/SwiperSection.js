import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import ecommerce from "../../../img/e-commerce.png";
import voting from "../../../img/voting.png";
import music from "../../../img/music.png";
import fit from "../../../img/fit.png";

const Container = styled.div`
  width: 50%;
  position: relative;
  margin-top: 20px;
`;

const SwiperStyle = styled(Swiper)`
  color: "black";
  height: 40vh;
  border-radius: 15px;

  /* @media screen and (max-width: 320px) {
    width: 50%;
  } */

  .swiper-button-prev,
  .swiper-button-next {
    top: 110%;
    color: white;
    border: 3px solid white;
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 25px;
    box-shadow: 1px 1px 5px black;
  }
  .swiper-button-next {
    right: auto;
    left: 100px;
  }
  .swiper-button-disabled {
    opacity: 1;
  }

  .swiper-pagination-bullet {
    color: black;
  }
  .swiper-pagination-bullet-active {
  }
`;
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function SwiperSection() {
  const slideStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    color: "white",
    borderRadius: "15px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingLeft: "20px",
    paddingBottom: "20px",
    fontSize: "25px",
    fontWeight: 700,
    textShadow: "1px 1px 10px black",
  };

  return (
    <Container>
      <SwiperStyle
        style={{ position: "static" }}
        spaceBetween={20}
        slidesPerView={3.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${ecommerce})`,
            ...slideStyle,
          }}
        >
          E-COMMERCE
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${voting})`,
            ...slideStyle,
          }}
        >
          VOTING
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${music})`,
            ...slideStyle,
          }}
        >
          MUSIC
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${fit})`,
            ...slideStyle,
          }}
        >
          FIT
        </SwiperSlide>
      </SwiperStyle>
    </Container>
  );
}

export default SwiperSection;
