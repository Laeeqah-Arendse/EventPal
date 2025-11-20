import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

export default function TopNav({ title }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        {/* Left: Logo + App Name */}
        <View style={styles.left}>
          <Image source={require("../assets/Logo.png")} style={styles.logo} />
          <Text style={styles.appName}>EventPal</Text>
        </View>

        {/* Center: Screen Title */}
        <View style={styles.center}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>

        {/* Right: Notification + Profile Icons */}
        <View style={styles.rightIcons}>
          <Ionicons
            name="notifications-outline"
            size={22}
            color={COLORS.midText}
            style={{ marginRight: 12 }}
          />
          <Ionicons name="person-circle-outline" size={26} color={COLORS.midText} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: "#fff" },
  header: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 4,
  },
  left: { flexDirection: "row", alignItems: "center", flex: 1 },
  logo: { width: 26, height: 26, marginRight: 8, resizeMode: "contain" },
  appName: {
    fontWeight: "700",
    fontSize: 16,
    color: COLORS.darkText,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    color: COLORS.darkText,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
});
