import React from "react";
import { Text, View, SafeAreaView, ScrollView, Image } from "react-native";

import Button from "../../components/common/Button";

import ServiceCarousel from "../../components/Carousel/SerivceCarousel/ServiceCarousel";
import SpecialistCarousel from "../../components/Carousel/TopSpecialists/SpecialistCarousel";

import logo from "../../assets/logo.webp";

const TopSection = () => {
  return (
    <View className="flex-1 w-full">
      <View className="flex justify-center items-center">
        <Image source={logo} />
        <View className="">
          <Text className="uppercase font-sologan text-gray-medium font-medium">
            Groom, style & network
          </Text>
        </View>
      </View>
      <View className="flex justify-start w-full my-4">
        <View className="flex flex-row">
          <Text className="text-gray-medium font-bold text-xl">Hey Mike,</Text>
          <Text className="text-gray-medium text-lg ml-2">welcome back!</Text>
        </View>
      </View>
    </View>
  );
};

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

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-[#2C2C2C] flex-1">
      <ScrollView className="px-4 ">
        <TopSection />
        <ServiceCarousel />
        <BookApppointmentButton />
        <SpecialistCarousel />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
