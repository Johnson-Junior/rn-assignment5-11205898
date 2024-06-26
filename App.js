import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './Homepage'; // Make sure the path is correct

function SettingsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? 'black' : 'white',
    },
    text: {
      color: isDarkMode ? 'white' : 'black',
      fontSize: 32,
      fontWeight: 'bold',
    },
    // ... rest of your styles
  });

  const renderMenuItem = (title, marginTop = 20) => (
    <TouchableOpacity
      style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, marginTop }}
    >
      <Text style={styles.text}>{title}</Text>
      <Ionicons name="chevron-forward" size={24} color={styles.text.color} />
    </TouchableOpacity>
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implement your theme switching logic here (e.g., update styles, colors, etc.)
  };

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, marginBottom: 40, textAlign: 'center', marginTop: 60 }}>
        Settings
      </Text>

      {renderMenuItem('Language', 0)}

      {renderMenuItem('My Profile')}
      {renderMenuItem('Contact Us')}
      {renderMenuItem('Change Password')}
      {renderMenuItem('Privacy Policy')}

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 30, marginTop: 30 }}>
        <Text style={styles.text}>Theme</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>
    </View>
  );
}

function MyCardsPage() {
  return (
    <View>
      <Text>My Cards Page</Text>
    </View>
  );
}

function StatisticsPage() {
  return (
    <View>
      <Text>Statistics Page</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconImage;
            
            if (route.name === 'Home') {
              iconImage = focused ? require('./Images/home.png') : require('./Images/home.png');
            } else if (route.name === 'My Cards') {
              iconImage = focused ? require('./Images/myCards.png') : require('./Images/myCards.png');
            } else if (route.name === 'Statistics') {
              iconImage = focused ? require('./Images/statictics.png') : require('./Images/statictics.png');
            } else if (route.name === 'Settings') {
              iconImage = focused ? require('./Images/settings.png') : require('./Images/settings.png');
            }
            
            // You can return any component that you like here!
            return <Image source={iconImage} style={{ width: size, height: size }} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="My Cards" component={MyCardsPage} />
        <Tab.Screen name="Statistics" component={StatisticsPage} />
        <Tab.Screen name="Settings" component={SettingsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
