import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TopNav from "../components/TopNav";
import { COLORS } from "../constants/colors";

export default function TeamsScreen() {
  const teams = [
    { name: "App Dev", status: "Active", members: 5, due: "Oct 15, 2025" },
    { name: "Info Systems", status: "Active", members: 3, due: "Nov 1, 2025" },
    { name: "ADP", status: "Pending", members: 4, due: "Oct 30, 2025" },
    { name: "ADT", status: "Completed", members: 2, due: "Sep 30, 2025" },
  ];

  return (
    <View style={styles.container}>
      <TopNav />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.heading}>Project Teams</Text>
        {teams.map((team, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.teamName}>{team.name}</Text>
            <Text style={styles.details}>
              {team.status} • {team.members} members • Due {team.due}
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
    marginBottom: 15,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  teamName: { fontWeight: "700", color: COLORS.darkText, fontSize: 16 },
  details: { color: COLORS.midText, marginTop: 4 },
});
