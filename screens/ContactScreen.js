import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TopNav from "../components/TopNav";
import { COLORS } from "../constants/colors";

export default function ContactScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // Show confirmation popup
    Alert.alert(
      "Confirm Send",
      "Are you sure you want to send this message?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => {
            // Clear input fields
            setFullName("");
            setEmail("");
            setSubject("");
            setMessage("");
            // Show success popup
            Alert.alert("Success", "Message sent successfully!");
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <TopNav title="Contact" />
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* --- Header --- */}
        <View style={styles.headerSection}>
          <View style={styles.headingRow}>
            <Text style={styles.heading}>Send us a Message</Text>
          </View>
          <Text style={styles.subHeading}>
            Fill out the form below and we'll get back to you
          </Text>
        </View>

        {/* --- Form Fields --- */}
        <Text style={styles.label}>Full Name *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.label}>Email Address *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Subject *</Text>
        <TextInput
          style={styles.input}
          placeholder="Select a subject"
          value={subject}
          onChangeText={setSubject}
        />

        <Text style={styles.label}>Message *</Text>
        <TextInput
          style={[styles.input, { height: 100, textAlignVertical: "top" }]}
          placeholder="Tell us about your event planning needs..."
          multiline
          value={message}
          onChangeText={setMessage}
        />

        {/* --- Submit Button --- */}
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Send Message</Text>
          <Ionicons
            name="paper-plane-outline"
            size={18}
            color="#fff"
            style={{ marginLeft: 6 }}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: { padding: 18 },

  // --- Header ---
  headerSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontWeight: "700",
    fontSize: 20,
    color: COLORS.darkText,
    textAlign: "center",
  },
  subHeading: {
    fontSize: 13,
    color: COLORS.gray,
    textAlign: "center",
    marginTop: 6,
  },

  // --- Labels and Inputs ---
  label: {
    color: COLORS.darkText,
    marginTop: 12,
    fontWeight: "600",
    fontSize: 14,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },

  // --- Button ---
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.orange,
    padding: 14,
    borderRadius: 10,
    marginTop: 25,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: { color: "#fff", fontWeight: "700", fontSize: 15 },
});
