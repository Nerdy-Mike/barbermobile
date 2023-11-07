import { Text, View } from "react-native";
import React from "react";
import clsx from "clsx";

interface Props {
  message: any;
  containerClassName?: string;
  testID?: string;
}
export default function ErrorText({
  message,
  containerClassName,
  testID,
}: Props) {
  return (
    <View
      className={clsx(
        "mt-2 flex-row content-center items-center",
        containerClassName,
      )}>
      <Text className={clsx(" ml-1  text-sm text-red-500")} testID={testID}>
        {message}
      </Text>
    </View>
  );
}
