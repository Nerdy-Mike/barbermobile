import { FC, ReactNode } from "react";
import { Dimensions, View } from "react-native";
import {
  TabView,
  Route,
  SceneRendererProps,
  TabBar,
  TabBarItem,
  TabBarIndicator,
} from "react-native-tab-view";

interface ITagBasedTabViewProps {
  routes: Route[];
  renderScene: (
    props: SceneRendererProps & {
      route: Route;
    },
  ) => ReactNode;
  index: number;
  setIndex: (index: number) => void;
}

export const TagBasedTabView: FC<ITagBasedTabViewProps> = ({
  routes,
  renderScene,
  index,
  setIndex,
}) => {
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{
        width: Dimensions.get("window").width,
      }}
      swipeEnabled={false}
      animationEnabled={false} // Since it's tag based, we don't want to animate the transition
      renderTabBar={props => (
        <TabBar
          {...props}
          scrollEnabled={true}
          tabStyle={{
            width: "auto",
          }}
          style={{
            backgroundColor: "transparent",
            shadowOffset: { height: 0, width: 0 },
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
          }}
          contentContainerStyle={{
            gap: 8,
            width: "100%",
          }}
          renderTabBarItem={({ key, navigationState, ...props }) => {
            const currentIndex = navigationState.index;
            return (
              <TabBarItem
                key={key}
                navigationState={navigationState}
                {...props}
                style={{
                  borderRadius: 20,
                  backgroundColor:
                    key === navigationState.routes[currentIndex].key
                      ? "#6C6E76"
                      : "#2C2C2C",
                  borderWidth: 1,
                  borderColor: "#6C6E76",
                  paddingVertical: 3,
                  paddingHorizontal: 12,
                  minHeight: "auto",
                }}
                labelStyle={{
                  textTransform: "capitalize",
                  fontWeight: "500",
                  fontSize: 14,
                  lineHeight: 19.6,
                }}
                inactiveColor="#6C6E76"
                activeColor="#ECECEC"
              />
            );
          }}
          renderIndicator={() => null}
        />
      )}
    />
  );
};

export default TagBasedTabView;
