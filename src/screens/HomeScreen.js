import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.title}>Advocacy</Text>
          <View style={styles.lang}>
            <Text style={styles.langText}>EN</Text>
            <Text style={styles.langText}>HI</Text>
            <Text style={styles.langText}>BN</Text>
          </View>
        </View>

        {/* CARDS */}
        <View style={styles.row}>

          {/* APPOINTMENTS */}
          <View style={[styles.card, { backgroundColor: "#dbeafe" }]}>
            <Text style={styles.cardTitle}>View Booked Appointments</Text>

            <Text style={styles.text}>Client: Robert Vance</Text>
            <Text style={styles.sub}>15 OCT, 10:00 AM</Text>

            <Text style={styles.text}>Client: Dan Righy</Text>
            <Text style={styles.sub}>15 OCT, 10:00 AM</Text>

            <TouchableOpacity style={styles.blueBtn}>
              <Text style={styles.btnText}>Contact Client</Text>
            </TouchableOpacity>
          </View>

          {/* CASE STATUS */}
          <View style={[styles.card, { backgroundColor: "#dcfce7" }]}>
            <Text style={styles.cardTitle}>Case Status & History</Text>

            <Text style={styles.badgeClosed}>Closed</Text>
            <Text style={styles.text}>Client: Priya Sharma</Text>

            <Text style={styles.badgeActive}>Active</Text>
            <Text style={styles.text}>Client: Priya Sharma</Text>

            <TouchableOpacity style={styles.greenBtn}>
              <Text style={styles.btnText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* VALIDATE BUTTON */}
        <TouchableOpacity style={styles.validateBtn}>
          <Text style={styles.validateText}>
            Validate Client Authenticity
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: { flex: 1, backgroundColor: "#f3f4f6", padding: 16 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: { fontSize: 30, fontWeight: "700" },

  lang: { flexDirection: "row", gap: 10 },

  langText: { color: "#1e3a8a", fontWeight: "600" },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  card: {
    width: "48%",
    borderRadius: 20,
    padding: 15,
  },

  cardTitle: {
    fontWeight: "700",
    marginBottom: 10,
  },

  text: { marginTop: 10 },

  sub: { color: "#555" },

  blueBtn: {
    backgroundColor: "#3b82f6",
    padding: 10,
    borderRadius: 12,
    marginTop: 15,
  },

  greenBtn: {
    backgroundColor: "#22c55e",
    padding: 10,
    borderRadius: 12,
    marginTop: 15,
  },

  btnText: { color: "#fff", textAlign: "center" },

  badgeClosed: {
    backgroundColor: "#aaa",
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
    color: "#fff",
    alignSelf: "flex-start",
  },

  badgeActive: {
    backgroundColor: "#22c55e",
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
    color: "#fff",
    alignSelf: "flex-start",
  },

  validateBtn: {
    backgroundColor: "#1e3a8a",
    padding: 18,
    borderRadius: 20,
    marginTop: 30,
  },

  validateText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },

});