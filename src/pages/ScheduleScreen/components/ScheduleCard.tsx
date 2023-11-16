import { FC, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CustomModal from "../../../components/Modal/CustomModal";

interface IScheduleCardProps {}

const ScheduleCard: FC<IScheduleCardProps> = () => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <View style={{ flex: 1 }}>
      <CustomModal
        title="Schedule"
        isVisible={isModalVisible}
        closeModal={() => setModalVisible(false)}>
        <View className="">
          <View className="flex flex-row justify-between items-center px-4 py-2">
            <Text className="text-white text-base">Date and time:</Text>
            <Text className="text-white text-base">11/12/23</Text>
          </View>
          <View className="flex flex-row justify-between items-center px-4 py-2">
            <Text className="text-white text-base">Services:</Text>
            <Text className="text-white text-base">Haircut, Beard</Text>
          </View>
          <View className="flex flex-row justify-between items-center px-4 py-2">
            <Text className="text-white text-base">Barber name:</Text>
            <Text className="text-white text-base">Mike</Text>
          </View>
        </View>
      </CustomModal>
      <TouchableOpacity
        onPress={() => setModalVisible(!isModalVisible)}
        className="w-full border rounded-md flex flex-col my-2 py-2 bg-gray-veryDark border-gray-dark shadow shadow-gray-700">
        <View className="flex flex-row justify-between items-center px-4 py-2">
          <Text className="text-white text-base">Date and time:</Text>
          <Text className="text-white text-base">11/12/23</Text>
        </View>
        <View className="flex flex-row justify-between items-center px-4 py-2">
          <Text className="text-white text-base">Services:</Text>
          <Text className="text-white text-base">Haircut, Beard</Text>
        </View>
        <View className="flex flex-row justify-between items-center px-4 py-2">
          <Text className="text-white text-base">Barber name:</Text>
          <Text className="text-white text-base">Mike</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ScheduleCard;
