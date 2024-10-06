import { SplitView } from '@/components/SplitView';
import { useLibraryWallpapers, useLikedWallpapers, useSuggestedWallpapers, useWallpapers } from '@/hooks/useWallpapers';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={LibrayScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Suggested" component={SuggestedScreen} />
    </Tab.Navigator>
  );
}
function LibrayScreen() {
  const wallpapers = useLibraryWallpapers();

  return <View style={styles.container}>
  <SplitView wallpapers={wallpapers}/>
  </View>
}
function LikedScreen() {
  const wallpapers = useLikedWallpapers();

  return <View style={styles.container}>
      <SplitView wallpapers={wallpapers}/>
    </View>
}
function SuggestedScreen() {
    const wallpapers = useSuggestedWallpapers();

    return <View style={styles.container}>
      <SplitView wallpapers={wallpapers}/>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})