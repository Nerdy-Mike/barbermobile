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

const a = [
  {
    name: "Wade Warren",
    description: "Top Hair Specialist",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Darrel Steward",
    description: "Hair Stylist",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cody Fisher",
    description: "Beard Specialist",
    image: "",
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
