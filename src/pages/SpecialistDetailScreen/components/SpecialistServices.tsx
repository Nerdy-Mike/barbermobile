import React, { useState } from "react";
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import AntIcon from "react-native-vector-icons/AntDesign";
import clsx from "clsx";

import Button from "../../../components/common/Button";

const mockData = [
  {
    id: "1",
    name: "Hair Cut",
    price: 50,
    duration: 60,
    description: "Hair Cut",
  },
  {
    id: "2",
    name: "Beard Trim",
    price: 50,
    duration: 20,
  },
  {
    id: "3",
    name: "Shaving",
    price: 30,
    duration: 30,
    description: "Hair Cut",
  },
];

const BookApppointmentButton = () => {
  const onClick = () => {
    console.log("Book appointment");
  };
  return (
    <View className="h-12 w-full flex-1">
      <Button
        title="Book an appointment"
        onPress={onClick}
        containerClassName="bg-gray-medium w-full rounded-md h-full"
        textClassName="text-gray-800 text-lg font-medium"
      />
    </View>
  );
};

const SingleService = ({ service }: { service: any }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const animation = new Animated.Value(10); // Initial height, adjust as needed

  const toggleExpand = () => {
    const toValue = expanded ? 10 : 20; // Adjust the expanded height as needed
    Animated.timing(animation, {
      toValue,
      duration: 300, // Adjust the duration as needed
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  const spinValue = new Animated.Value(0);

  // First set up animation
  Animated.timing(spinValue, {
    toValue: 1,
    duration: 300,
    useNativeDriver: true,
  }).start();

  const iconRotation = animation.interpolate({
    inputRange: [10, 20],
    outputRange: ["0deg", "90deg"],
  });

  const onClick = () => {};

  return (
    <View className="flex flex-col bg-[#383837] px-4 w-full">
      <TouchableWithoutFeedback onPress={toggleExpand}>
        <View>
          <View className="flex flex-row justify-between items-center  h-14">
            <Text className="text-gray-text text-lg ">{service.name}</Text>
            <View className="flex flex-row items-center justify-center gap-1">
              <Icon name="dollar" size={16} color="#ECECEC" />
              <Text className="text-gray-text text-lg font-semibold">
                {service.price}
              </Text>
              <Animated.View style={{ transform: [{ rotate: iconRotation }] }}>
                <AntIcon name="right" size={18} color="#6C6E76" />
              </Animated.View>
            </View>
          </View>
          <Animated.View>
            {expanded && (
              <View className="w-full flex-1 mb-4">
                <Button
                  title="Book an appointment"
                  onPress={onClick}
                  containerClassName="bg-gray-medium w-full rounded-md h-12"
                  textClassName="text-gray-800 text-lg font-medium"
                />
              </View>
            )}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
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
            key={service.id}
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
