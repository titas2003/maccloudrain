import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Switch,
    Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function ProfileSetupScreen() {
    const [experience, setExperience] = useState("");
    const [practiceArea, setPracticeArea] = useState("");
    const [isEnabled, setIsEnabled] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >

                {/* HEADER */}
                <View style={styles.header}>
                    <Text style={styles.title}>Advocacy</Text>
                    <View style={styles.lang}>
                        <Text style={styles.langText}>EN</Text>
                        <Text style={styles.langText}>HI</Text>
                        <Text style={styles.langText}>BN</Text>
                    </View>
                </View>

                {/* PROFILE IMAGE SECTION */}
                <View style={styles.profileCard}>
                    <View style={styles.avatar}>
                        <Text style={{ fontSize: 40 }}>👤</Text>
                    </View>
                    <Text style={styles.uploadText}>Upload Profile Picture</Text>
                </View>

                {/* MAIN CARD */}
                <View style={styles.mainCard}>

                    <Text style={styles.sectionTitle}>
                        Professional Bio & Card Setup
                    </Text>

                    {/* PRACTICE AREA */}
                    <View style={styles.inputBox}>
                        <Picker
                            selectedValue={practiceArea}
                            onValueChange={(itemValue) => setPracticeArea(itemValue)}
                        >
                            <Picker.Item label="Practice Areas (Multi-select)" value="" />
                            <Picker.Item label="Criminal Law" value="criminal" />
                            <Picker.Item label="Corporate Law" value="corporate" />
                            <Picker.Item label="Family Law" value="family" />
                        </Picker>
                    </View>

                    {/* EXPERIENCE */}
                    <Text style={styles.label}>Years of Experience</Text>
                    <TextInput
                        style={styles.input}
                        value={experience}
                        onChangeText={setExperience}
                        keyboardType="numeric"
                    />

                    {/* DIGITAL CARD */}
                    <Text style={styles.sectionTitle}>Digital Business Card</Text>

                    <View style={styles.cardRow}>
                        <View style={styles.businessCard}>
                            <Text style={styles.cardName}>Adv. Michael Chen</Text>
                            <Text style={styles.cardSub}>Mock Name</Text>
                            <Text style={styles.cardBrand}>⚖️ Advocacy</Text>
                        </View>

                        <TouchableOpacity style={styles.generateBtn}>
                            <Text style={styles.generateText}>Generate Card</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* ADVERTISE CARD */}
                <View style={styles.adCard}>
                    <View>
                        <Text style={styles.adTitle}>Advertise Your Card</Text>
                        <Text style={styles.adSub}>
                            Activate and Advertise Card
                        </Text>
                    </View>

                    <Switch
                        value={isEnabled}
                        onValueChange={() => setIsEnabled(!isEnabled)}
                        trackColor={{ false: "#ccc", true: "#22c55e" }}
                        thumbColor="#fff"
                    />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f3f4f6",
        paddingHorizontal: 16,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },

    title: {
        fontSize: 30,
        fontWeight: "700",
    },

    lang: {
        flexDirection: "row",
        gap: 10,
    },

    langText: {
        color: "#1e3a8a",
        fontWeight: "600",
    },

    profileCard: {
        backgroundColor: "#1e3a8a",
        borderRadius: 20,
        alignItems: "center",
        paddingVertical: 30,
        marginTop: 10,
    },

    avatar: {
        backgroundColor: "#e5e7eb",
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },

    uploadText: {
        color: "#fff",
        marginTop: 10,
        fontSize: 16,
    },

    mainCard: {
        backgroundColor: "#d1fae5",
        borderRadius: 25,
        padding: 20,
        marginTop: -20,
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 10,
    },

    inputBox: {
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 15,
    },

    label: {
        marginTop: 10,
        marginBottom: 5,
    },

    input: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 12,
    },

    cardRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },

    businessCard: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 15,
        width: "55%",
        elevation: 3,
    },

    cardName: {
        fontWeight: "700",
        fontSize: 16,
    },

    cardSub: {
        color: "#666",
        marginBottom: 10,
    },

    cardBrand: {
        fontWeight: "600",
    },

    generateBtn: {
        backgroundColor: "#1e3a8a",
        padding: 15,
        borderRadius: 15,
    },

    generateText: {
        color: "#fff",
        fontWeight: "600",
    },

    adCard: {
        backgroundColor: "#e5e7eb",
        marginTop: 20,
        padding: 20,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    adTitle: {
        fontSize: 18,
        fontWeight: "700",
    },

    adSub: {
        color: "#555",
    },

});