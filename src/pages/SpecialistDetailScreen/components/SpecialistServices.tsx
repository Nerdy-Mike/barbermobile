import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import AntIcon from "react-native-vector-icons/AntDesign";
import clsx from "clsx";

const mockData = [
  {
    name: "Hair Cut",
    price: 50,
    duration: 60,
    description: "Hair Cut",
  },
  {
    name: "Beard Trim",
    price: 50,
    duration: 20,
  },
  {
    name: "Shaving",
    price: 30,
    duration: 30,
    description: "Hair Cut",
  },
];

const SingleService = ({ service }: { service: any }) => {
  return (
    <View className="flex flex-row justify-between items-center w-full h-14 bg-[#383837] px-4">
      <Text className="text-gray-text text-lg ">{service.name}</Text>
      <View className="flex flex-row items-center justify-center gap-1">
        <Icon name="dollar" size={16} color="#ECECEC" />
        <Text className="text-gray-text text-lg font-semibold">
          {service.price}
        </Text>
        <AntIcon name="right" size={18} color="#6C6E76" />
      </View>
    </View>
  );
};

const SpecialistServices = () => {
  return (
    <View className="flex flex-col">
      <Text className="text-gray-text text-lg font-bold p-4">Services</Text>
      {mockData.map((service, index) => {
        return (
          <View
            key={index}
            className={clsx(
              "border-b border-gray-500",
              index === mockData.length - 1 ? "border-0" : "border-b",
            )}>
            <SingleService service={service} key={index} />
          </View>
        );
      })}
    </View>
  );
};

export default SpecialistServices;
