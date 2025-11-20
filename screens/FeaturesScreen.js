import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import TopNav from "../components/TopNav";
import { COLORS } from "../constants/colors";

export default function FeaturesScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <TopNav title="Features" />
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* --- Gradient Feature Block --- */}
        <Animated.View
          style={[
            styles.gradientWrapper,
            {
              opacity: fadeAnim,
              transform: [
                {
                  translateY: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <LinearGradient
            colors={["#9FB68B", "#747F69"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientCard}
          >
            <Text style={styles.heading}>Real-time Collaboration</Text>
            <Text style={styles.subText}>
              Experience instant updates and seamless synchronization across all
              devices
            </Text>

            <Text style={[styles.heading, { marginTop: 16 }]}>
              Seamless Integrations
            </Text>
            <Text style={styles.subText}>
              Connect with your favorite tools and services
            </Text>

            {/* --- Feature Icon Grid --- */}
            <View style={styles.iconGrid}>
              <View style={styles.iconBox}>
                <Ionicons name="calendar-outline" size={24} color="#565E4F" />
                <Text style={styles.iconLabel}>Calendar Apps</Text>
              </View>
              <View style={styles.iconBox}>
                <Ionicons
                  name="chatbubbles-outline"
                  size={24}
                  color="#D7EFC2"
                />
                <Text style={styles.iconLabel}>Communication</Text>
              </View>
              <View style={styles.iconBox}>
                <Ionicons name="folder-outline" size={24} color="#9B6EC1" />
                <Text style={styles.iconLabel}>File Storage</Text>
              </View>
              <View style={styles.iconBox}>
                <Ionicons name="analytics-outline" size={24} color="#FF914D" />
                <Text style={styles.iconLabel}>Analytics</Text>
              </View>
            </View>

            {/* --- White Feature Cards --- */}
            <View style={styles.whiteCard}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="trending-up-outline"
                  size={24}
                  color="#4A90E2"
                  style={styles.cardIcon}
                />
                <View>
                  <Text style={styles.cardTitle}>Progress Tracking</Text>
                  <Text style={styles.cardText}>
                    Visual dashboards and analytics
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.whiteCard}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="document-text-outline"
                  size={24}
                  color="#9FB68B"
                  style={styles.cardIcon}
                />
                <View>
                  <Text style={styles.cardTitle}>Document Management</Text>
                  <Text style={styles.cardText}>Centralized storage</Text>
                </View>
              </View>
            </View>

            <View style={styles.whiteCard}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="#FF914D"
                  style={styles.cardIcon}
                />
                <View>
                  <Text style={styles.cardTitle}>Smart Notifications</Text>
                  <Text style={styles.cardText}>
                    Stay informed without distractions
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.whiteCard}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="shield-checkmark-outline"
                  size={24}
                  color="#9B6EC1"
                  style={styles.cardIcon}
                />
                <View>
                  <Text style={styles.cardTitle}>Data Security</Text>
                  <Text style={styles.cardText}>
                    Safe and reliable storage systems
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.whiteCard}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="people-outline"
                  size={24}
                  color="#565E4F"
                  style={styles.cardIcon}
                />
                <View>
                  <Text style={styles.cardTitle}>Team Coordination</Text>
                  <Text style={styles.cardText}>
                    Simplified collaboration tools
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.whiteCard}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="checkmark-done-outline"
                  size={24}
                  color="#4A90E2"
                  style={styles.cardIcon}
                />
                <View>
                  <Text style={styles.cardTitle}>Task Automation</Text>
                  <Text style={styles.cardText}>
                    Automate workflows and reminders
                  </Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: { padding: 20, alignItems: "center" },

  // --- Gradient Block ---
  gradientWrapper: { width: "100%", borderRadius: 18, overflow: "hidden" },
  gradientCard: {
    padding: 20,
    borderRadius: 18,
  },
  heading: {
    fontSize: 17,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginBottom: 4,
  },
  subText: {
    fontSize: 13,
    color: "#fff",
    textAlign: "center",
    lineHeight: 18,
  },

  // --- Icon Grid ---
  iconGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  iconBox: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "dashed",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 14,
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  iconLabel: {
    marginTop: 6,
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
  },

  // --- White Feature Cards ---
  whiteCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginTop: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  iconRow: { flexDirection: "row", alignItems: "center" },
  cardIcon: { marginRight: 12 },
  cardTitle: { fontSize: 15, fontWeight: "700", color: COLORS.darkText },
  cardText: { fontSize: 13, color: COLORS.midText, marginTop: 2 },
});
