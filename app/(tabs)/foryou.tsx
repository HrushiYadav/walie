import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={HomeScreen} />
      <Tab.Screen name="Liked" component={SettingsScreen} />
      <Tab.Screen name="Suggested" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
function HomeScreen (){
    return <View><Text>Hello</Text></View>
}
function SettingsScreen (){
    return <View><Text>Hello</Text></View>
}