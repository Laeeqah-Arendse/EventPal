import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";

export default function BottomNav({ state, descriptors, navigation }) {

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const iconName = {
          Home: "home-outline",
          Teams: "people-outline",
          Calendar: "calendar-outline",
          Features: "list-outline",
          Contact: "mail-outline",
          About: "information-circle-outline",
        }[route.name] || "ellipse-outline";

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tab}
            key={route.key}
            activeOpacity={0.7}
          >
            <AnimatedIcon name={iconName} focused={isFocused} />
            <Text style={[styles.label, isFocused ? styles.labelActive : {}]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function AnimatedIcon({ name, focused }) {
  const scale = React.useRef(new Animated.Value(focused ? 1.05 : 1)).current;

  React.useEffect(() => {
    Animated.spring(scale, {
      toValue: focused ? 1.05 : 1,
      useNativeDriver: true,
      friction: 8,
      tension: 120,
    }).start();
  }, [focused]);

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Ionicons
        name={name}
        size={22}
        color={focused ? COLORS.primary : COLORS.midText}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 0.6,
    borderTopColor: COLORS.gray,
    height: 66,
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 4,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
  },
  label: {
    fontSize: 11,
    marginTop: 3,
    color: COLORS.midText,
  },
  labelActive: {
    color: COLORS.primary,
    fontWeight: "600",
  },
});
