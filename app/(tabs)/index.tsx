import { SplitView ,} from "@/components/SplitView";
import { useCarousel } from "@/hooks/useCarousel";
import {useWallpapers } from "@/hooks/useWallpapers";
import { useState } from "react";
import { SafeAreaView,StyleSheet, Dimensions, Text, Image} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { View } from "react-native-reanimated/lib/typescript/Animated";


export default function explore (){
    const wallpapers = useWallpapers();
    const width = Dimensions.get('window').width;
    const [yOffset, setYOffset] = useState(0);
    const carouselItems = useCarousel();
    return <SafeAreaView>      
            <View style={{height: 300 - yOffset}}>
                <Carousel
                    width={width}
                    height={300 - yOffset}
                    data={carouselItems}
                    onSnapToItem={(index)=> console.log('current index', index)}
                    renderItem={({ index }) => (
                        <View>
                           <Image source ={{uri: carouselItems[index].image}} style={{height: 300}}/>
                        </View>
                    )}
                />
            </View>
           <SplitView onScroll={(yOffset) =>{
            setYOffset(yOffset)
           }} wallpapers={wallpapers}/>
       
    </SafeAreaView>
} 
