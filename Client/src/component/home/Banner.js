import Carousel from "react-multi-carousel";
import { bannerData } from "../staticData/StaticData";
import { Box } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
export function Banner() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        slidesToSlide={1}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
      >
        {bannerData &&
          bannerData.map((item) => {
            return (
              <>
                <Box>
                  <img
                    src={item.url}
                    alt="banner"
                    style={{ width: "100%", height: "180px" }}
                  />
                </Box>
              </>
            );
          })}
      </Carousel>
      ;
    </>
  );
}
