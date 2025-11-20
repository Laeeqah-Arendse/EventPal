import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Animated,
} from "react-native";
import TopNav from "../components/TopNav";
import { COLORS } from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

export default function AboutScreen() {
  // Animations for each card
  const fadeAnims = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];

  useEffect(() => {
    fadeAnims.forEach((anim, i) => {
      Animated.timing(anim, {
        toValue: 1,
        duration: 700,
        delay: i * 250,
        useNativeDriver: true,
      }).start();
    });
  }, []);

  return (
    <View style={styles.container}>
      <TopNav title="About" />
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* About Header */}
        <Animated.View
          style={[
            styles.card,
            styles.aboutCard,
            {
              opacity: fadeAnims[0],
              transform: [
                {
                  translateY: fadeAnims[0].interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={styles.iconWrapper}>
            <Image
              source={require("../assets/Logo.png")}
              style={styles.icon}
            />
          </View>
          <Text style={styles.heading}>About EventPal</Text>
          <Text style={styles.subText}>
            Born from the real frustrations of students.
          </Text>
        </Animated.View>

        {/* Mission */}
        <Animated.View
          style={[
            styles.card,
            styles.missionCard,
            {
              opacity: fadeAnims[1],
              transform: [
                {
                  translateY: fadeAnims[1].interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.sectionText}>
            To revolutionize project coordination by providing powerful,
            user-friendly tools that enable seamless collaboration and ensure
            every project becomes a remarkable success.
          </Text>
        </Animated.View>

        {/* Vision */}
        <Animated.View
          style={{
            width: "100%",
            opacity: fadeAnims[2],
            transform: [
              {
                translateY: fadeAnims[2].interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          }}
        >
          <LinearGradient
            colors={[COLORS.primary, COLORS.accent]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.card, styles.visionCard]}
          >
            <Text style={[styles.sectionTitle, { color: "#fff" }]}>
              Our Vision
            </Text>
            <Text style={[styles.sectionText, { color: "#fff" }]}>
              To keep students organized and productive across disciplines.
              Whether you're studying engineering, business, science, or design,
              EventPal helps your group work smarter, not harder.
            </Text>
          </LinearGradient>
        </Animated.View>

        {/* Brand Values */}
        <Animated.View
          style={[
            styles.card,
            styles.valuesCard,
            {
              opacity: fadeAnims[3],
              transform: [
                {
                  translateY: fadeAnims[3].interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.sectionTitle}>Brand Values</Text>
          {[
            {
              name: "Collaboration",
              desc: "Makes teamwork effortless and enjoyable",
            },
            {
              name: "Clarity",
              desc: "Eliminates confusion with structured tasks and timelines",
            },
            {
              name: "Student Centered",
              desc: "Prioritizes student needs and habits",
            },
            {
              name: "Innovation",
              desc: "Continuously improves to enhance productivity",
            },
            {
              name: "Reliability",
              desc: "Trusted to keep teams organized and accountable",
            },
            {
              name: "Accessibility",
              desc: "Simple, inclusive, mobile-friendly",
            },
          ].map((v, i) => (
            <View key={i} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>
                <Text style={styles.bold}>{v.name} – </Text>
                {v.desc}
              </Text>
            </View>
          ))}
        </Animated.View>

        {/* Brand Personality */}
        <Animated.View
          style={{
            width: "100%",
            opacity: fadeAnims[4],
            transform: [
              {
                translateY: fadeAnims[4].interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          }}
        >
          <LinearGradient
            colors={[COLORS.accent, COLORS.primary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.card, styles.personalityCard]}
          >
            <Text style={[styles.sectionTitle, { color: "#fff" }]}>
              Brand Personality
            </Text>
            {[
              "Friendly – Warm language, peer-to-peer tone, approachable UI",
              "Efficient – Intuitive navigation, quick task management",
              "Supportive – Gentle reminders, progress tracking, accountability",
              "Adaptable – Works across disciplines and project sizes",
              "Modern – Minimalist, clean, and contemporary visuals",
              "Creative – Accent colours and imagery inspire engagement and ownership",
            ].map((trait, i) => (
              <View key={i} style={styles.listItem}>
                <Text style={[styles.bullet, { color: "#fff" }]}>•</Text>
                <Text style={[styles.listText, { color: "#fff" }]}>{trait}</Text>
              </View>
            ))}
          </LinearGradient>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: { padding: 20, alignItems: "center" },

  // --- Shared card style ---
  card: {
    width: "100%",
    borderRadius: 18,
    padding: 20,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },

  // --- About header card ---
  aboutCard: {
    backgroundColor: COLORS.lightBg,
    alignItems: "center",
  },
  iconWrapper: {
    backgroundColor: "#fff",
    borderRadius: 60,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 10,
  },
  icon: { width: 40, height: 40, resizeMode: "contain" },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.darkText,
    marginBottom: 6,
  },
  subText: {
    textAlign: "center",
    color: COLORS.midText,
    fontSize: 14,
    lineHeight: 20,
  },

  // Mission card
  missionCard: { backgroundColor: COLORS.action },

  // Vision card
  visionCard: { borderRadius: 18 },

  // Brand Values card
  valuesCard: { backgroundColor: COLORS.lightBg },

  // Brand Personality card
  personalityCard: { borderRadius: 18 },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.darkText,
    marginBottom: 8,
  },
  sectionText: {
    color: COLORS.darkText,
    fontSize: 14,
    lineHeight: 20,
  },
  listItem: { flexDirection: "row", marginTop: 6 },
  bullet: { fontSize: 18, color: COLORS.darkText, marginRight: 8 },
  listText: { flex: 1, fontSize: 14, color: COLORS.darkText, lineHeight: 20 },
  bold: { fontWeight: "700" },
});
