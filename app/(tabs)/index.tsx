import { DownloadWallpaper } from "@/components/BottomSheet";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SplitView } from "@/components/SplitView";
import { ThemedView } from "@/components/ThemedView";
import { Wallpaper, useWallpapers } from "@/hooks/useWallpapers";
import { Link } from "expo-router";
import { useState } from "react";
import { SafeAreaView,Text, View ,Image,StyleSheet} from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function explore (){
    const wallpapers = useWallpapers();
    return <SafeAreaView>      
        <ParallaxScrollView headerBackgroundColor={{dark:"black",light:"white"}}
         headerImage={<Image style={{flex: 1}} source={{uri: wallpapers[0]?.url ??""}}
          />}>
           <SplitView wallpapers={wallpapers}/>
        </ParallaxScrollView>
       
    </SafeAreaView>
} 
