import React, { FC } from "react";
import { View } from "react-native";

interface IContainerProps {
  children: React.ReactNode;
  isHidden?: boolean;
}

const Container: FC<IContainerProps> = ({ children, isHidden = false }) => {
  if (isHidden) {
    return null;
  }

  return (
    <View className="flex-1 items-center justify-center p-4">{children}</View>
  );
};

export default Container;
