import React from "react";
import Swiper from "react-native-swiper";
import { View, Text, ImageBackground } from "react-native";
import { Grayscale } from "react-native-color-matrix-image-filters";

import Carousel, { ParallaxImage } from "react-native-snap-carousel";

import BarberBg1 from "../../../assets/images/barber1.webp";

interface IServiceCarouselWidgetProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

const mockData = [
  {
    id: 1,
    title: "Fall Set",
    description: "Haircut, shaving & styling",
    price: "$30",
    image: BarberBg1,
  },
  {
    id: 2,
    title: "Beard Trim",
    description: "Precision beard trim and shaping with clippers and scissors",
    price: "$15",
    image: BarberBg1,
  },
  {
    id: 3,
    title: "Gray Blending",
    description: "Expert blending of gray hairs for subtle restoration",
    price: "$25",
    image: BarberBg1,
  },
  {
    id: 4,
    title: "Kids Haircut",
    description: "Fun and engaging haircuts for young clients",
    price: "$15",
    image: BarberBg1,
  },
];

const SingleServiceCarouselWidget: React.FC<IServiceCarouselWidgetProps> = ({
  title,
  description,
  price,
  image,
}) => {
  return (
    <View className="w-full rounded-xl overflow-hidden ">
      <Grayscale className="rounded-xl ">
        <ImageBackground
          source={BarberBg1}
          resizeMode="cover"
          style={{}}
          className="w-full h-44 rounded-xl">
          <View
            className="h-full w-full absolute rounded-xl"
            style={{
              backgroundColor: "rgba(75, 75, 75, 0.6)",
            }}
          />
          <View className="p-5 h-full flex flex-col justify-between">
            <View>
              <Text className="text-gray-text font-bold text-xl">{title}</Text>
              <Text className="text-gray-medium  text-lg">{description}</Text>
            </View>
            <Text className="text-gray-medium font-bold text-xl">{price}</Text>
          </View>
        </ImageBackground>
      </Grayscale>
    </View>
  );
};

const ServiceCarouselWidget = () => {
  return (
    <View className=" w-full px-2 h-56">
      <Swiper
        loop={false}
        showsPagination={true}
        autoplay={true}
        dotColor="#6C6E76"
        activeDotColor="#CCCCCC"
        snapToAlignment="center"
        containerStyle={{
          width: "100%",
          height: "100%",
        }}>
        {mockData.map((item, index) => {
          return (
            <View key={item?.id}>
              <SingleServiceCarouselWidget
                key={index}
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default ServiceCarouselWidget;
