import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import { Home } from "../../screens/Home";
import Login from '../Auth/Login';
import Icon from 'react-native-vector-icons/Feather';
import ProfileScreen from '../Profile/ProfileScreen';
import { OrderScreen } from '../Staff/Order/OrderScreen';

const Tabs = AnimatedTabBarNavigator();

const TabNavigator: React.FC = () => (
  <Tabs.Navigator
    screenOptions={{
      tabBarActiveTintColor: "#2F7C6E",
      tabBarInactiveTintColor: "#222222",
    }}
  >
    <Tabs.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Icon
            name="home"
            size={size ? size : 24}
            color={focused ? color : "#222222"}
          />
        ),
      }}
    />
    <Tabs.Screen name="Order" component={OrderScreen}  options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Icon
            name="clipboard"
            size={size ? size : 24}
            color={focused ? color : "#222222"}
          />
        ),
      }} />
    <Tabs.Screen name="Profile" component={ProfileScreen}  options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Icon
            name="user"
            size={size ? size : 24}
            color={focused ? color : "#222222"}
          />
        ),
      }} />
  </Tabs.Navigator>
);

export default TabNavigator;
