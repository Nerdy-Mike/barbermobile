import { Image, Text, View, TouchableOpacity } from "react-native";
import { Grayscale } from "react-native-color-matrix-image-filters";
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import debounce from "lodash.debounce";

import { RootStackParamList } from "../../../types/navigation.type";

export interface ISpecialistCarouselWidgetProps {
  name: string;
  description: string;
  image: string;
}

const SpecialistCarouselWidget: React.FC<ISpecialistCarouselWidgetProps> = ({
  name,
  description,
  image,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onClick = debounce(() => {
    // navigate to SpecialistProfileScreen outside of BottomNavBar
    navigation.dispatch(
      StackActions.push("SpecialistProfileScreen", {
        specialistId: "1",
      }),
    );
  }, 400);

  return (
    <TouchableOpacity className="w-full overflow-hidden" onPress={onClick}>
      <Grayscale className="flex flex-col ">
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          className="w-11/12 aspect-square rounded-md"
        />
        <View className=" flex flex-col w-full overflow-ellipsis">
          <Text className="text-gray-text font-bold text-lg">{name}</Text>
          <Text className="text-gray-medium overflow-ellipsis">
            {description}
          </Text>
        </View>
      </Grayscale>
    </TouchableOpacity>
  );
};

export default SpecialistCarouselWidget;
