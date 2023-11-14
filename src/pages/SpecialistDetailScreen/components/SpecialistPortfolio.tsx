import React, { useCallback } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { Grayscale } from "react-native-color-matrix-image-filters";
import Carousel from "react-native-snap-carousel";

const { width: screenWidth } = Dimensions.get("window");

const mockData = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

interface ISpecialistPortfolioWidgetProps {
  id: string;
  image: string;
}

const SpeciallistPortfolioWidget = ({
  item,
}: {
  item: ISpecialistPortfolioWidgetProps;
}) => {
  const { image } = item;
  return (
    <View className="w-full overflow-hidden">
      <Grayscale className="flex flex-col ">
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          className="w-11/12 aspect-square rounded-md"
        />
      </Grayscale>
    </View>
  );
};

const SpecialistPortfolio = () => {
  const renderItem = useCallback(
    ({ item }: { item: ISpecialistPortfolioWidgetProps }) => {
      return <SpeciallistPortfolioWidget item={item} />;
    },
    [],
  );

  return (
    <View className="w-full items-center justify-centerr flex-1 mt-2">
      <Text className="flex flex-row items-start justify-start text-gray-text text-lg font-bold w-full pb-4 pt-2">
        Portfolio
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

export default SpecialistPortfolio;
