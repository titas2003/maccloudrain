import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Switch,
    SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Use @expo/vector-icons if using Expo
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

import colors from "../constants/colors";



const AdvocateProfileScreen = () => {
    const [practice, setPractice] = useState("");
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

                {/* Header / Profile Picture Area */}
                <View style={styles.headerContainer}>
                    <View style={styles.profileCircle}>
                        <Icon name="user" size={60} color="#fff" />
                    </View>
                    <Text style={styles.uploadText}>Upload Profile Picture</Text>
                </View>

                {/* Form Container */}
                <View style={styles.formCard}>
                    <Text style={styles.sectionTitle}>Professional Bio & Card Setup</Text>

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

                    <Text style={styles.label}>Years of Experience</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter years"
                        keyboardType="numeric"
                    />

                    <Text style={styles.sectionTitle}>Digital Business Card</Text>

                    <View style={styles.cardRow}>
                        {/* The Mock Card */}
                        <View style={styles.businessCard}>
                            <Text style={styles.cardName}>Adv. Michael Chen</Text>
                            <Text style={styles.cardSub}>Mock Name</Text>
                            <View style={styles.cardBrand}>
                                <Icon name="user" size={14} color="#1D3557" />
                                <Text style={styles.brandText}>Advocacy</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.generateButton}>
                            <Text style={styles.generateButtonText}>Generate Card</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Advertising Toggle Card */}
                <View style={styles.toggleCard}>
                    <View>
                        <Text style={styles.toggleTitle}>Advertise Your Card</Text>
                        <Text style={styles.toggleSub}>Activate and Advertise Card</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#4ADE80" }}
                        thumbColor={"#f4f3f4"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

            </ScrollView>

            {/* Bottom Navigation Tab */}
            <View style={styles.bottomTab}>
                <TabItem icon="home" label="Home" />
                <TabItem icon="briefcase" label="Practice" />
                <TabItem icon="search" label="Client Search" />
                <TabItem icon="user" label="Profile" active />
                <TabItem icon="settings" label="Settings" />
            </View>
        </SafeAreaView>
    );
};

const TabItem = ({ icon, label, active }) => (
    <View style={styles.tabItem}>
        <Icon name={icon} size={22} color={active ? '#1D3557' : '#999'} />
        <Text style={[styles.tabLabel, active && styles.activeTabLabel]}>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FB',
    },
    scrollContent: {
        paddingBottom: 100,
    },
    headerContainer: {
        backgroundColor: '#1D3557',
        height: 220,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    profileCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'rgba(255,255,255,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    uploadText: {
        color: '#fff',
        fontWeight: '600',
    },
    formCard: {
        backgroundColor: '#E6F4EA', // Light green tint
        margin: 15,
        borderRadius: 20,
        padding: 20,
        marginTop: -20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 15,
        marginTop: 10,
    },
    label: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
    },
    dropdown: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#D1D1D1',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#D1D1D1',
    },
    cardRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    businessCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        width: '55%',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
    },
    cardName: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    cardSub: {
        fontSize: 12,
        color: '#888',
        marginBottom: 10,
    },
    cardBrand: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    brandText: {
        fontSize: 12,
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#1D3557',
    },
    generateButton: {
        backgroundColor: '#1D3557',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 12,
    },
    generateButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 12,
    },
    toggleCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 15,
        padding: 20,
        borderRadius: 25,
        elevation: 1,
    },
    toggleTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    toggleSub: {
        fontSize: 12,
        color: '#666',
    },
    bottomTab: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        justifyContent: 'space-around',
        width: '100%',
    },
    tabItem: {
        alignItems: 'center',
    },
    tabLabel: {
        fontSize: 10,
        color: '#999',
        marginTop: 4,
    },
    activeTabLabel: {
        color: '#1D3557',
        fontWeight: '600',
    },
    picker: {
        backgroundColor: colors.inputBg,
        borderRadius: 12,
        marginTop: 5,
    },
});

export default AdvocateProfileScreen;