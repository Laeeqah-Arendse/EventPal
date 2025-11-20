import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import TopNav from "../components/TopNav";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";

export default function HomeScreen() {
  const features = [
    {
      icon: "checkbox-outline",
      color: COLORS.orange,
      title: "Task Management",
      desc: "Organize tasks with deadlines and progress tracking",
    },
    {
      icon: "calendar-outline",
      color: COLORS.primary,
      title: "Calendar Sync",
      desc: "Integrate with your favorite calendar apps",
    },
    {
      icon: "people-outline",
      color: COLORS.action,
      title: "Team Collaboration",
      desc: "Work together with real-time updates",
    },
    {
      icon: "chatbubble-outline",
      color: COLORS.accent,
      title: "Group Chat",
      desc: "Built-in messaging and file sharing",
    },
    {
      icon: "folder-outline",
      color: COLORS.orange,
      title: "Recent Projects",
      desc: "Access to previous projects",
    },
    {
      icon: "time-outline",
      color: COLORS.primary,
      title: "Deadline Reminder",
      desc: "Never miss a due date with reminders",
    },
    {
      icon: "stats-chart",
      color: COLORS.action,
      title: "Project Analytics",
      desc: "View project statistics",
    },
  ];

 return (
         <View style={styles.container}>
           <TopNav title="Home" />
           <ScrollView contentContainerStyle={styles.scroll}>
             <Text style={styles.heading}>Everything You Need</Text>
             <Text style={styles.subheading}>Powerful tools for seamless planning</Text>

             {features.map((f, index) => (
               <View key={index} style={styles.card}>
                 <View style={[styles.iconBox, { backgroundColor: f.color }]}>
                   <Ionicons name={f.icon} size={25} color="#fff" />
                 </View>
                 <View style={styles.cardText}>
                   <Text style={styles.cardTitle}>{f.title}</Text>
                   <Text style={styles.cardDesc}>{f.desc}</Text>
                 </View>
               </View>
             ))}
           </ScrollView>
         </View>
       );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: {
    padding: 10
    ,
  },
  heading: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 30,
    color: COLORS.darkText,

  },
  subheading: {
    textAlign: "center",
    fontSize: 15,
    color: COLORS.midText,
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 18,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.20,
    shadowRadius: 6,
    elevation: 4,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  cardText: { flex: 5 },
  cardTitle: {
    fontWeight: "700",
    fontSize: 15,
    color: COLORS.darkText,
  },
  cardDesc: {
    color: COLORS.midText,
    fontSize: 14,
    marginTop: 4,
  },
});
