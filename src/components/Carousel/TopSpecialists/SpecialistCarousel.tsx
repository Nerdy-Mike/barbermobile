import React, { useCallback } from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import SpecialistCarouselWidget, {
  ISpecialistCarouselWidgetProps,
} from "./SpecialistCarouselWidget";

const { width: screenWidth } = Dimensions.get("window");

const mockData = [
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
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const SpecialistCarousel = () => {
  const renderItem = useCallback(
    ({ item }: { item: ISpecialistCarouselWidgetProps }) => {
      return <SpecialistCarouselWidget {...item} />;
    },
    [],
  );

  return (
    <View className="w-full items-center justify-center h-60 flex-1 my-4">
      <Text className="flex flex-row items-start justify-start text-gray-text text-lg font-bold w-full pb-4 pt-2">
        Top Specialists
      </Text>
      <Carousel
        sliderWidth={screenWidth - 34}
        sliderHeight={screenWidth}
        itemWidth={screenWidth / 2.3}
        data={mockData}
        renderItem={renderItem}
        activeSlideAlignment="start"
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
    </View>
  );
};

export default SpecialistCarousel;
