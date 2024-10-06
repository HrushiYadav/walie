import { FlatList, StyleSheet, View } from "react-native"
import { ThemedView } from "./ThemedView"
import { ImageCard } from "./ImageCard"
import { Wallpaper } from "@/hooks/useWallpapers"
import { useState } from "react"
import { DownloadWallpaper } from "./BottomSheet"

export function SplitView({wallpapers}:{
    wallpapers: Wallpaper []
}) {
    const [selectedWallpaper, setSelectedWallaper] = useState<null | Wallpaper>(null);
    return <>
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
    {selectedWallpaper && <DownloadWallpaper wallpaper={selectedWallpaper} onClose={() => setSelectedWallaper(null)}/>}
    </>
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