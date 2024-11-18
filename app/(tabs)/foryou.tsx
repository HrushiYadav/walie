import { SplitView } from '@/components/SplitView';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useLibraryWallpapers, useLikedWallpapers, useSuggestedWallpapers, useWallpapers } from '@/hooks/useWallpapers';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export default function () {
  const theme = useColorScheme() ?? 'light';
  return (
    <SafeAreaView style= {styles.container}>
      <Tab.Navigator style= {{flex:1}} screenOptions={{
        tabBarActiveTintColor: Colors[theme].tint,
        tabBarStyle: {
              backgroundColor: Colors[theme].background
        }
      }}>
        <Tab.Screen name="Library" component={LibrayScreen} />
        <Tab.Screen name="Liked" component={LikedScreen} />
        <Tab.Screen name="Suggested" component={SuggestedScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
function LibrayScreen() {
  const wallpapers = useLibraryWallpapers();

  return <ThemedView style={styles.container}>
  <SplitView wallpapers={wallpapers}/>
  </ThemedView>
}
function LikedScreen() {
  const wallpapers = useLikedWallpapers();

  return <ThemedView style={styles.container}>
      <SplitView wallpapers={wallpapers}/>
    </ThemedView>
}
function SuggestedScreen() {
    const wallpapers = useSuggestedWallpapers();

    return <ThemedView style={styles.container}>
      <SplitView wallpapers={wallpapers}/>
    </ThemedView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})