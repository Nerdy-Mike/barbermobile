import React from "react";
import { View, Text } from "react-native";

import ScheduleCard from "./ScheduleCard";

const mockData = [
  {
    dateTime: "2021-08-01T10:00:00.000Z",
    services: [
      {
        name: "Haircut",
        price: 10,
      },
      {
        name: "Beard",
        price: 10,
      },
    ],
    barberId: "1",
  },
  {
    dateTime: "2021-08-01T11:00:00.000Z",
    services: [
      {
        name: "Haircut",
        price: 15,
      },
      {
        name: "Beard",
        price: 15,
      },
    ],
    barberId: "2",
  },
  {
    dateTime: "2021-08-01T12:00:00.000Z",
    services: [
      {
        name: "Haircut",
        price: 20,
      },
      {
        name: "Beard",
        price: 20,
      },
    ],
    barberId: "3",
  },
  {
    dateTime: "2021-08-01T13:00:00.000Z",
    services: [
      {
        name: "Haircut",
        price: 25,
      },
      {
        name: "Beard",
        price: 25,
      },
    ],
    barberId: "4",
  },
];

const ScheduleList = () => {
  return (
    <View className="flex flex-col py-4">
      {mockData.map(item => (
        <ScheduleCard key={item.dateTime} />
      ))}
    </View>
  );
};

export default ScheduleList;
