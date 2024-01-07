import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './screens/tabScreens/Feed';
import Settings from './screens/tabScreens/Settings';
import Notifications from './screens/tabScreens/Notifications';

import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TweetDetailScreen from './screens/homeStack/TweetDetailsScreen';

// Native Stack
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Feed' component={Feed} />
      <HomeStack.Screen
        name='TweetDetailScreen'
        component={TweetDetailScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </HomeStack.Navigator>
  );
}

// Tab bottom
const Tab = createBottomTabNavigator();

function BottomTabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;

          if (route.name === 'HomeStackGroup') {
            iconName = focused ? 'home' : 'home-outline';
          }

          if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name='HomeStackGroup'
        component={HomeStackGroup}
        options={{ headerShown: false, tabBarLabel: 'Home' }}
      />
      <Tab.Screen name='Notifications' component={Notifications} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomTabGroup />
    </NavigationContainer>
  );
}
