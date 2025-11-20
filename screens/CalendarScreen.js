import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TopNav from "../components/TopNav";
import { COLORS } from "../constants/colors";

export default function CalendarScreen() {
  const deadlines = [
    { title: "API Documentation", priority: "High", date: "Today 09:00 AM", status: "OVERDUE" },
    { title: "Info Systems Intro", priority: "Medium", date: "Thu, Oct 2 10:00 AM", status: "Upcoming" },
  ];

  return (
    <View style={styles.container}>
      <TopNav />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.heading}>Upcoming Deadlines</Text>
        {deadlines.map((item, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>
              {item.priority} • {item.date} • {item.status}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: { padding: 18 },
  heading: {
    fontWeight: "700",
    fontSize: 20,
    color: COLORS.darkText,
    textAlign: "center",
    marginBottom: 15,
  },
  card: {
    backgroundColor: COLORS.lightBg,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  title: { fontWeight: "700", color: COLORS.darkText, fontSize: 16 },
  desc: { color: COLORS.midText, marginTop: 4 },
});
