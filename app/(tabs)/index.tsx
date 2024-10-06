import { DownloadWallpaper } from "@/components/BottomSheet";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { Wallpaper, useWallpapers } from "@/hooks/useWallpapers";
import { Link } from "expo-router";
import { useState } from "react";
import { SafeAreaView,Text, View ,Image,StyleSheet} from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function explore (){
    const wallpapers = useWallpapers();
    const [selectedWallpaper, setSelectedWallaper] = useState<null | Wallpaper>(null);
    return <SafeAreaView>      
        <ParallaxScrollView headerBackgroundColor={{dark:"black",light:"white"}}
         headerImage={<Image style={{flex: 1}} source={{uri: wallpapers[0]?.url ??""}}
          />}>
            <ThemedView style={styles.container}>             
                <ThemedView style={styles.innerContainer}>
                <FlatList
                    data={wallpapers.filter((_, index) => index % 2 === 0)}
                    renderItem={({item}) => <View style={styles.imageContainer}>
                    <ImageCard onPress={() => {
                    setSelectedWallaper(item)
                    }} wallpaper={item}/></View>}
                    keyExtractor={item => item.name}
                    />
                </ThemedView>
                <ThemedView style={styles.innerContainer}>
                <FlatList
                    data={wallpapers.filter((_, index) => index % 2 === 1)}
                    renderItem={({item}) => <View style={styles.imageContainer}>
                    <ImageCard onPress={() => {
                    setSelectedWallaper(item)
                    }} wallpaper={item}/></View>}
                    keyExtractor={item => item.name}
                    />
                </ThemedView>
            </ThemedView>
        </ParallaxScrollView>
        {selectedWallpaper && <DownloadWallpaper onClose={() => setSelectedWallaper(null)}/>}
    </SafeAreaView>
} 
const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 4,
    },
    imageContainer: {
        paddingVertical: 10,
    }
})