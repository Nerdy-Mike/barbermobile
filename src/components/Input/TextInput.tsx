import clsx from "clsx";
import { FC, ReactNode } from "react";
import {
  Text,
  TextInputProps,
  View,
  TextInput as Base,
  TouchableOpacity,
  Platform,
} from "react-native";

interface ITextInputProps extends TextInputProps {
  ref?: any;
  label?: string;
  rightIcon?: ReactNode;
  multiline?: boolean;
  onRightIconPress?: () => void;
}

export const TextInput: FC<ITextInputProps> = props => {
  const { label, rightIcon, onRightIconPress, multiline, ...inputProps } =
    props;
  return (
    <View className="flex flex-col gap-1">
      {label ? (
        <Text className="mb-1 text-md font-semibold text-gray-dark">
          {label}
        </Text>
      ) : null}
      <View className="relative">
        <View pointerEvents={"auto"}>
          <Base
            {...inputProps}
            className={clsx(
              "w-full rounded-[10px] border-[1px] border-gray-medium bg-gray-light",
              inputProps?.className,
              Platform.OS === "ios" ? "p-3" : "p-2.5",
            )}
            textAlignVertical={multiline ? "top" : "center"}
            autoCapitalize="none"
            multiline={multiline}
          />
        </View>
        {rightIcon ? (
          <View className="absolute bottom-0 right-4 top-0 flex h-full justify-center">
            {onRightIconPress ? (
              <TouchableOpacity onPress={onRightIconPress}>
                {rightIcon}
              </TouchableOpacity>
            ) : (
              <>{rightIcon}</>
            )}
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default TextInput;
