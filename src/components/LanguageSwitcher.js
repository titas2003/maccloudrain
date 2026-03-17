import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const LanguageSwitcher = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.lang}>EN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.lang}>HI</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.lang}>BN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageSwitcher;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },
  lang: {
    fontWeight: "600",
    color: "#1e3a8a",
  },
});