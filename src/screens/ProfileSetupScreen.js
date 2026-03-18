import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function ProfileSetupScreen() {
  const navigation = useNavigation();

  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");
  const [advertise, setAdvertise] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.title}>Advocacy</Text>

          <View style={styles.rightHeader}>
            <View style={styles.lang}>
              <Text style={styles.langText}>EN</Text>
              <Text style={styles.langText}>HI</Text>
              <Text style={styles.langText}>BN</Text>
            </View>

            <View style={styles.profileIcon} />
          </View>
        </View>

        {/* PROFILE IMAGE */}
        <View style={styles.profileSection}>
          <TouchableOpacity style={styles.imageUpload}>
            <Text style={styles.uploadText}>Upload Profile Picture</Text>
          </TouchableOpacity>
        </View>

        {/* FORM CARD */}
        <View style={styles.card}>

          <Text style={styles.sectionTitle}>
            Professional Bio & Card Setup
          </Text>

          {/* PRACTICE AREA */}
          <Text style={styles.label}>Practice Areas</Text>
          <TextInput
            placeholder="Select Practice Areas"
            style={styles.input}
          />

          {/* EXPERIENCE */}
          <Text style={styles.label}>Years of Experience</Text>
          <TextInput
            placeholder="Enter years"
            keyboardType="numeric"
            value={experience}
            onChangeText={setExperience}
            style={styles.input}
          />

          {/* BIO */}
          <Text style={styles.label}>Bio</Text>
          <TextInput
            placeholder="Write your bio"
            value={bio}
            onChangeText={setBio}
            style={[styles.input, { height: 80 }]}
            multiline
          />

          {/* DIGITAL CARD */}
          <Text style={styles.sectionTitle}>Digital Business Card</Text>

          <View style={styles.cardPreview}>
            <Text style={styles.cardName}>Adv. Your Name</Text>
            <Text style={styles.cardSub}>Your Specialization</Text>
            <Text style={styles.cardType}>⚖️ Advocacy</Text>
          </View>

          {/* GENERATE BUTTON */}
          <TouchableOpacity
            style={styles.generateBtn}
            onPress={() => navigation.replace("MainApp")}
          >
            <Text style={styles.generateText}>Generate Card</Text>
          </TouchableOpacity>
        </View>

        {/* ADVERTISE TOGGLE */}
        <View style={styles.advertiseBox}>
          <View>
            <Text style={styles.adTitle}>Advertise Your Card</Text>
            <Text style={styles.adSub}>
              Activate and Advertise Card
            </Text>
          </View>

          <Switch
            value={advertise}
            onValueChange={setAdvertise}
            trackColor={{ false: "#ccc", true: "#22c55e" }}
            thumbColor={"#fff"}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
  },

  rightHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  lang: {
    flexDirection: "row",
    marginRight: 10,
  },

  langText: {
    marginHorizontal: 5,
    color: "#1e3a8a",
    fontWeight: "600",
  },

  profileIcon: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#e5e7eb",
  },

  profileSection: {
    alignItems: "center",
    marginVertical: 20,
  },

  imageUpload: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#1e3a8a",
    justifyContent: "center",
    alignItems: "center",
  },

  uploadText: {
    color: "#fff",
    textAlign: "center",
  },

  card: {
    backgroundColor: "#d1fae5",
    borderRadius: 20,
    padding: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },

  label: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "500",
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
  },

  cardPreview: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
  },

  cardName: {
    fontWeight: "700",
    fontSize: 16,
  },

  cardSub: {
    color: "#555",
  },

  cardType: {
    marginTop: 10,
    fontWeight: "600",
  },

  generateBtn: {
    backgroundColor: "#1e3a8a",
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
  },

  generateText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },

  advertiseBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e5e7eb",
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
  },

  adTitle: {
    fontWeight: "700",
  },

  adSub: {
    color: "#555",
  },

});