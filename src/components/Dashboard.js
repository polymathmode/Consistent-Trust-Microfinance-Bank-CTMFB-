
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Switch, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Dashboard = () => {
    // State to manage the visibility of the balance
    const [balanceVisible, setBalanceVisible] = React.useState(true);

    // State to manage the values of the to-do items
    const [todos, setTodos] = React.useState({
        kycLevel: 'Upgrade KYC Level',
        accountLimits: 'Set Account Limits',
        biometrics: 'Enable your biometrics',
    });

    // Function to handle input changes for the to-do items
    const handleInputChange = (name, value) => {
        setTodos({
            ...todos,
            [name]: value,
        });
    };

    return (
        <ScrollView style={styles.container}>
            {/* Greeting Section */}
            <View style={styles.greetingSection}>
                <Image source={require('../../assets/Rectangle 17.png')} style={styles.avatar} />
                <View style={styles.greetingTextContainer}>
                    <Text style={styles.greetingText}>Hi, Tayo</Text>
                    <Text style={styles.questionText}>How are you today?</Text>
                </View>
                <Icon name="notifications-outline" size={24} style={styles.notificationIcon} />
            </View>

            {/* Balance Section */}
            <View style={[styles.balanceSection, styles.balanceSectionText]}>
                <Text style={[styles.balanceText, styles.balanceSectionText]}>Savings Account Balance</Text>
                <Text style={[styles.balanceAmount, styles.balanceSectionText]}>
                    {balanceVisible ? 'NGN102,238.71' : '•••••••'}
                </Text>
                <Text style={[styles.accountName, styles.balanceSectionText]}>Adewole Temitope</Text>
                <Text style={[styles.accountNumber, styles.accountBalanceText]}>2040011238</Text>
                <View style={styles.viewBalance}>
                    <Text style={styles.balanceSectionText}>Hide Balance</Text>
                    <Switch
                        value={balanceVisible}
                        onValueChange={() => setBalanceVisible(!balanceVisible)}
                        style={styles.balanceSwitch}
                    />
                </View>
            </View>

            {/* Services Section */}
            <View style={styles.servicesSection}>
                <Text style={styles.sectionTitle}>Services</Text>
                <View style={styles.serviceIcons}>
                    {/* Service Icon: Send Money */}
                    <View style={styles.serviceIcon}>
                        <View style={[styles.iconBackground, styles.iconBackgroundSend]}>
                            <Icon name="paper-plane-outline" size={32} color="#fff" />
                        </View>
                        <Text>Send Money</Text>
                    </View>
                    {/* Service Icon: Loans */}
                    <View style={styles.serviceIcon}>
                        <View style={[styles.iconBackground, styles.iconBackgroundLoans]}>
                            <Icon name="wallet-outline" size={32} />
                        </View>
                        <Text>Loans</Text>
                    </View>
                    {/* Service Icon: Pay Bills */}
                    <View style={styles.serviceIcon}>
                        <View style={[styles.iconBackground, styles.iconBackgroundBills]}>
                            <Icon name="receipt-outline" size={32} />
                        </View>
                        <Text>Pay Bills</Text>
                    </View>
                    {/* Service Icon: Airtime */}
                    <View style={styles.serviceIcon}>
                        <View style={[styles.iconBackground, styles.iconBackgroundAirtime]}>
                            <Icon name="phone-portrait-outline" size={32} />
                        </View>
                        <Text>Airtime</Text>
                    </View>
                </View>
            </View>

            {/* To-Do Section */}
            <View style={styles.todoSection}>
                <View style={styles.toDos}>
                    <Text style={styles.sectionTitle}>Things to do</Text>
                    <Text style={styles.todoItem}>Done 1 of 3</Text>
                </View>
                {/* To-Do Item: Set Account Limits */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.accountInput}
                        placeholder="Set Account Limits"
                        value={todos.accountLimits}
                        onChangeText={(text) => handleInputChange('accountLimits', text)}
                        keyboardType="default"
                    />
                    <Icon name="checkmark-circle-outline" size={24} color="green" style={styles.icon} />
                </View>
                {/* To-Do Item: Upgrade KYC Level */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.accountInput}
                        placeholder="Upgrade KYC Level"
                        value={todos.kycLevel}
                        onChangeText={(text) => handleInputChange('kycLevel', text)}
                        keyboardType="phone-pad"
                    />
                </View>
                {/* To-Do Item: Enable your biometrics */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.accountInput}
                        placeholder="Enable your biometrics"
                        value={todos.biometrics}
                        onChangeText={(text) => handleInputChange('biometrics', text)}
                        keyboardType="phone-pad"
                    />
                </View>
            </View>
        </ScrollView>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    greetingSection: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 30,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    greetingTextContainer: {
        flex: 1,
    },
    viewBalance: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
    },
    iconBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 5,
        marginBottom: 5,
    },
    iconBackgroundSend: {
        backgroundColor: '#D6FAD1',
    },
    iconBackgroundLoans: {
        backgroundColor: '#FFF2C9',
    },
    iconBackgroundBills: {
        backgroundColor: '#EFC7B6',
    },
    iconBackgroundAirtime: {
        backgroundColor: '#DDEDF4',
    },

    balanceAmount:{
        color: '#5faab1',
    },
    balanceSectionText: {
        //  color: '#5faab1',
        color: '#fff',

        borderWidth: 0,
        borderColor: 'transparent',
    },
  
    accountBalanceText: {
        color: '#fff',
        borderColor: 'transparent',
        borderWidth: 0,
    },
    greetingText: {
        fontSize: 18,
        marginLeft: 10,
    },
    questionText: {
        fontSize: 14,
        marginLeft: 10,
        color: '#555',
    },
    notificationIcon: {
        marginLeft: 'auto',
    },
    balanceSection: {
        padding: 20,
        backgroundColor: '#208220',
        borderRadius: 10,
        margin: 20,
    },
    balanceText: {
        fontSize: 16,
    },
    balanceAmount: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    accountName: {
        fontSize: 16,
        marginTop: 10,
    },
    accountNumber: {
        fontSize: 14,
        color: '#555',
    },
    balanceSwitch: {
        marginTop: 8,
    },
    servicesSection: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    serviceIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    serviceIcon: {
        alignItems: 'center',
    },
    toDos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
    },
    icon: {
        marginLeft: 130,
    },
    todoInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
    },
    todoSection: {
        padding: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '100%',
        marginBottom: 10,
    },
    accountInput: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 5,
    },
});

export default Dashboard;
