import React, { FC } from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/Ionicons";

interface ICustomModalProps {
  isVisible: boolean;
  title: string;
  closeModal: () => void;
  children: React.ReactNode;
}

const CustomModal: FC<ICustomModalProps> = ({
  isVisible,
  closeModal,
  title,
  children,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={closeModal}
      animationIn={"fadeIn"}
      animationOut={"fadeOut"}>
      <View className="flex flex-col w-full bg-gray-veryDark rounded-md">
        <View className="w-full flex flex-row justify-between items-center h-12 px-2 border-b border-gray-dark">
          <TouchableOpacity onPress={closeModal}>
            <Icon name="close" size={24} color={"#CCCCCC"} />
          </TouchableOpacity>
          <Text className="text-lg">{title}</Text>
          <View />
        </View>
        {children}
      </View>
    </Modal>
  );
};

export default CustomModal;
