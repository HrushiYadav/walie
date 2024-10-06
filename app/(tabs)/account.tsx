import { useState } from "react";
import { Button, Text, View } from "react-native";
import { DownloadWallpaper } from "../../components/BottomSheet";
import { SafeAreaView } from "react-native-safe-area-context";

export  default function account (){
    const [pictureOpen,setPictureOpen] = useState(false);
    return <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
        <Text> User Account Page</Text>
        <Button title="Open BottomSheet" onPress={()=>{
            setPictureOpen(true);
        }}></Button>
       {pictureOpen && <DownloadWallpaper onClose={() => setPictureOpen(false)}/>}
       </View>
    </SafeAreaView>
} 