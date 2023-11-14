import React, { useCallback } from "react";
import { Dimensions, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import ServiceCarouselWidget, {
  IServiceCarouselWidgetProps,
} from "./ServiceCarouselWidget";

import BarberBg1 from "../../../assets/images/barber1.webp";

export const SLIDER_WIDTH = Dimensions.get("window").width + 120;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const data: IServiceCarouselWidgetProps[] = [
  {
    index: 0,
    item: {
      id: 1,
      title: "Haircut",
      description: "Expert haircut with clippers and scissors",
      price: "$25",
      image: BarberBg1,
    },
  },
  {
    index: 2,
    item: {
      id: 2,
      title: "Beard Trim",
      description:
        "Precision beard trim and shaping with clippers and scissors",
      price: "$15",
      image: BarberBg1,
    },
  },
  {
    index: 3,
    item: {
      id: 3,
      title: "Gray Blending",
      description: "Expert blending of gray hairs for subtle restoration",
      price: "$25",
      image: BarberBg1,
    },
  },
];

const ServiceCarousel = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef();

  const renderItem = useCallback(
    ({ item }: { item: IServiceCarouselWidgetProps }) => {
      return <ServiceCarouselWidget {...item} />;
    },
    [],
  );

  return (
    <View className="w-full items-center justify-center h-60">
      <Carousel
        layout="default"
        ref={isCarousel.current}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel.current}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "rgba(0, 0, 0, 0.92)",
        }}
        activeOpacity={0.92}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        containerStyle={{
          height: 1,
          width: data.length * 10,
          maxWidth: 100,
        }}
      />
    </View>
  );
};

export default ServiceCarousel;
