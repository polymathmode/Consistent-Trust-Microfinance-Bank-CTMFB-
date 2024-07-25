



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import LoginPage from '../components/LoginPage';
import Dashboard from '../components/Dashboard';

// Create Stack and Tab navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DashboardTabs = () => (
  <Tab.Navigator
    initialRouteName="DashboardTab"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        // Custom icon for the "MoreTab"
        if (route.name === 'MoreTab') {
          return (
            <Image
              source={require('../../assets/Group 8272.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          );
        } else {
          // Default icons for other tabs
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'TransactionsTab') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'DashboardTab') {
            iconName = focused ? 'paper-plane' : 'paper-plane-outline';
          } else if (route.name === 'CardsTab') {
            iconName = focused ? 'card' : 'card-outline';
          }

          // Return the appropriate icon
          return <Icon name={iconName} size={size} color={color} />;
        }
      },
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        height: 60,
        paddingBottom: 10,
      },
    })}
  >
    {/* Define the tabs and their components */}
    <Tab.Screen name="HomeTab" component={Dashboard} options={{ tabBarLabel: 'Home' }} />
    <Tab.Screen name="TransactionsTab" component={Dashboard} options={{ tabBarLabel: 'Transactions' }} />
    <Tab.Screen name="DashboardTab" component={Dashboard} options={{ tabBarLabel: 'Dashboard' }} />
    <Tab.Screen name="CardsTab" component={Dashboard} options={{ tabBarLabel: 'Cards' }} />
    <Tab.Screen name="MoreTab" component={Dashboard} options={{ tabBarLabel: 'More' }} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      {/* Define the stack screens */}
      <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={DashboardTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;