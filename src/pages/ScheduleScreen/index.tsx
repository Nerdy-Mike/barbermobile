import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Route } from "react-native-tab-view";

import { useTabIndex } from "../../hooks/useTabIndex";

import ScheduleList from "./components/ScheduleList";
import TagBasedTabView from "../../components/Tab/TagBasedTabView";

enum SHEDULE_TABS {
  UPCOMING = "Upcoming",
  PAST = "Past",
}

const tabRoutes = [
  {
    key: SHEDULE_TABS.UPCOMING,
    title: "Upcoming",
  },
  {
    key: SHEDULE_TABS.PAST,
    title: "Past",
  },
];

const ScheduleScreen = () => {
  const { index, setTabIndex } = useTabIndex({ tabRoutes });

  const renderScene = ({ route }: { route: Route }) => {
    switch (route.key) {
      case SHEDULE_TABS.UPCOMING:
        return (
          <ScrollView className="flex-1 bg-[#2C2C2C] pr-3 ">
            <ScheduleList />
          </ScrollView>
        );
      case SHEDULE_TABS.PAST:
        return (
          <ScrollView className="flex-1 bg-[#2C2C2C] pr-3 ">
            <ScheduleList />
          </ScrollView>
        );
    }
  };

  return (
    <SafeAreaView className="bg-[#2C2C2C] flex-1">
      <View className="py-4 pl-4 pr-1 flex-1">
        <TagBasedTabView
          routes={tabRoutes}
          renderScene={renderScene}
          index={index}
          setIndex={setTabIndex}
        />
      </View>
    </SafeAreaView>
  );
};

export default ScheduleScreen;
