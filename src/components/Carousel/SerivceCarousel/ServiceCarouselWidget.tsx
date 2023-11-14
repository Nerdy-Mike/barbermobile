import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Grayscale } from "react-native-color-matrix-image-filters";

import BarberBg1 from "../../../assets/images/barber1.webp";

export interface IServiceCarouselWidgetProps {
  index: number;
  item: {
    title: string;
    description: string;
    price: string;
    image: string;
    id: number;
  };
}

const ServiceCarouselWidget: React.FC<IServiceCarouselWidgetProps> = props => {
  const { title, description, price, image } = props?.item;

  return (
    <View className="w-full h-full rounded-md overflow-hidden ">
      <Grayscale className="rounded-md ">
        <ImageBackground
          source={BarberBg1}
          resizeMode="cover"
          style={{}}
          className="w-full h-96 rounded-md">
          <View
            className="h-full w-full absolute rounded-md"
            style={{
              backgroundColor: "rgba(75, 75, 75, 0.5)",
            }}
          />
          <View className="p-5 h-44 flex flex-col justify-between ">
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

export default ServiceCarouselWidget;
