import React, { FC } from "react";
import { Text, View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import { ISpecialist } from "../../../types/common";

interface ISpecialistInfoProps {
  specialList: ISpecialist;
}

const SpecialistInfo: FC<ISpecialistInfoProps> = ({ specialList }) => {
  const { name, description } = specialList;
  return (
    <View className="flex flex-col justify-start mt-4">
      <View className="flex flex-row justify-between items-center">
        <Text className="text-2xl font-bold text-gray-medium">Wade Warren</Text>
        <View className="flex flex-row justify-center items-center gap-2">
          <Icon name="star" size={16} color={"#CCCCCC"} />
          <Text className="text-lg text-gray-medium">4.8</Text>
        </View>
      </View>
      <Text className="text-lg font-medium text-gray-dark">
        Top Hair Specialist
      </Text>
    </View>
  );
};

export default SpecialistInfo;
