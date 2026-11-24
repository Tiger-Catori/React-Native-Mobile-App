import { View, Text } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PaymentScreenComponent from '../screens/PaymentScreen';
import HomeScreenComponent from '../screens/HomeScreen';
import ContactUsScreenComponent from '../screens/ContactUsScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const tabScreenOptions = {
  tabBarActiveTintColor: '#1077AF',
  tabBarInactiveTintColor: '#1077AF',

  tabBarStyle: {
    backgroundColor: '#f2f4f7',
    height: vs(55),
    paddingBottom: 5,
    marginBottom: 0,
  },

  tabBarLabelStyle: {
    fontSize: s(10),
    fontWeight: 'bold'
  },

  headerShown: false,
};

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreenComponent}
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="#1077af" />,
          tabBarLabel: ({ focused, color }) => (
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color, fontSize: s(10) }}>Home</Text>
              <View
                style={{
                  height: 3,
                  width: 100,
                  backgroundColor: focused ? '#1077AF' : 'transparent',
                  marginTop: 4,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="PaymentScreen"
        component={PaymentScreenComponent}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="contactless-payment-circle" size={24} color="#1077af" />,
          tabBarLabel: ({ focused, color }) => (
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color, fontSize: s(10) }}>Payment</Text>
              <View
                style={{
                  height: 3,
                  width: 100,
                  backgroundColor: focused ? '#1077AF' : 'transparent',
                  marginTop: 4,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ContactUsScreen"
        component={ContactUsScreenComponent}
        options={{
          tabBarIcon: () => <AntDesign name="phone" size={24} color="#1077af" />,
          tabBarLabel: ({ focused, color }) => (
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color, fontSize: s(10) }}>Contact Us</Text>
              <View
                style={{
                  height: 3,
                  width: 100,
                  backgroundColor: focused ? '#1077AF' : 'transparent',
                  marginTop: 4,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
