import React, { FC } from "react";
import { Dimensions, FlatList, ScrollView } from "react-native";
import {
  ImageBackground,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Grayscale } from "react-native-color-matrix-image-filters";

import SpecialistInfo from "./components/SpecialistInfo";
import SpecialistPortfolio from "./components/SpecialistPortfolio";
import SpecialistServices from "./components/SpecialistServices";

const mockSpecialist = {
  name: "Wade Warren",
  description: "Top Hair Specialist",
  image:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const { width, height } = Dimensions.get("window");

interface ISpecialistProfileScreenProps {
  route: any;
}

const SpecialistProfileScreen: FC<ISpecialistProfileScreenProps> = ({
  route,
}) => {
  return (
    <ScrollView>
      <Grayscale>
        <ImageBackground
          style={{
            width: width,
            height: height / 2.5,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
        <View className="flex flex-col">
          <SpecialistInfo specialList={mockSpecialist} />
          <SpecialistPortfolio />
          <SpecialistServices />
          <View className="h-16" />
        </View>
      </Grayscale>
    </ScrollView>
  );
};

export default SpecialistProfileScreen;
