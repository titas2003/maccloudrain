import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

import colors from "../constants/colors";
import LanguageSwitcher from "../components/LanguageSwitcher";

const AdvocateRegisterScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [barId, setBarId] = useState("");
  const [practice, setPractice] = useState("");

  const handleRegister = () => {
    // You can add validation here later
    navigation.navigate("ProfileSetup");
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Advocacy</Text>
        <LanguageSwitcher />
      </View>

      {/* FORM CARD */}
      <View style={styles.card}>
        <Text style={styles.heading}>
          Create Your Advocate Account
        </Text>

        {/* FULL NAME */}
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Full Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        {/* BAR ID */}
        <Text style={styles.label}>State Bar Association ID</Text>
        <TextInput
          placeholder="State Bar Association ID"
          style={styles.input}
          value={barId}
          onChangeText={setBarId}
        />

        {/* PRACTICE AREA */}
        <Text style={styles.label}>
          Primary Legal Practice Area
        </Text>

        <View style={styles.picker}>
          <Picker
            selectedValue={practice}
            onValueChange={(itemValue) => setPractice(itemValue)}
          >
            <Picker.Item label="Select Practice Area" value="" />
            <Picker.Item label="Criminal Law" value="criminal" />
            <Picker.Item label="Corporate Law" value="corporate" />
            <Picker.Item label="Family Law" value="family" />
            <Picker.Item label="Civil Law" value="civil" />
          </Picker>
        </View>

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>
            Authenticate and Register
          </Text>
        </TouchableOpacity>
      </View>

      {/* LOGIN TEXT */}
      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text style={styles.loginLink}>Log In</Text>
      </Text>

    </SafeAreaView>
  );
};

export default AdvocateRegisterScreen;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
  },

  card: {
    backgroundColor: colors.cardBg,
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },

  label: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "500",
  },

  input: {
    backgroundColor: colors.inputBg,
    borderRadius: 12,
    padding: 15,
  },

  picker: {
    backgroundColor: colors.inputBg,
    borderRadius: 12,
    marginTop: 5,
  },

  button: {
    backgroundColor: colors.primary,
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  loginText: {
    textAlign: "center",
    marginTop: 30,
    color: colors.textLight,
  },

  loginLink: {
    color: "#1e3a8a",
    fontWeight: "600",
  },

});