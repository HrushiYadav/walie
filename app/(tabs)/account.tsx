import { useState } from "react";
import { Button, Pressable, Text, View , useColorScheme, StyleSheet, Appearance} from "react-native";
import { DownloadWallpaper } from "../../components/BottomSheet";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from '@/constants/Colors';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
export  default function account (){

    return <SafeAreaView style={{flex:1}}>
            <Header/>
            <ThemedView style={{flex:1}}>
                <LoginButtons />   
                <ThemeSelector/>       
            </ThemedView>
   
    </SafeAreaView>
} 
function ThemeSelector() {
    return <ThemedView style={{paddingTop: 20}}>
        <ThemedText style={styles.textBig}> Settings</ThemedText>
        <ThemedText> Theme</ThemedText>
            <ThemedView style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                <ThemeButton title={"Dark"} selected={false} colorScheme="dark"/>
                <ThemeButton title={"Light"} selected={false} colorScheme="light"/>
                <ThemeButton title={"System"} selected={false} colorScheme={null}/>
            </ThemedView>
        </ThemedView>
}
function ThemeButton({title, selected, colorScheme}: {selected: boolean, title: string , colorScheme: "dark"| "light" | null}) {
    const theme = useColorScheme()?? 'light';
    return <Pressable style={{padding: 10, 
        borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon,
        borderWidth: 1, 
        borderRadius: 5, flex: 0.3, alignContent: "center"}} onPress={() =>{
        Appearance.setColorScheme(colorScheme)
    }}>
        <ThemedText style={{width: "100%" , textAlign: "center"}}>{title}</ThemedText>
    </Pressable>
}
function LoginButtons() {
    const theme = useColorScheme() ?? 'light';
    return <>
        <AuthButton 
            label={"Sign in"} 
            icon={<Ionicons
                name={'logo-google'}
                size={24}
                color={theme === 'light' ? Colors.light.text : Colors.dark.icon}              
            />} 
        />
        <AuthButton 
            label={"Sign in"} 
            icon={<Ionicons
                name={'logo-apple'}
                size={24}
                color={theme === 'light' ? Colors.light.text : Colors.dark.icon}              
            />} 
        />
    </>
}
function Header() {
    return <ThemedView style={styles.topbar}>
        <ThemedText style={styles.textBig}>Panels</ThemedText>
        <ThemedText>Sign in to save your data</ThemedText>
    </ThemedView>
}
function AuthButton({ icon, label }:{
    label: string,
    icon: any
}) {
const theme = useColorScheme() ?? "light";
    return <Pressable style={{
      backgroundColor: theme,
      padding:10,
      marginHorizontal: 40,
      marginVertical: 5,
      justifyContent: "center",
      flexDirection: "row",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme === 'light'? Colors.light.text : Colors.dark.icon
    }}> 
    {icon}
      <ThemedText style={{
        fontSize: 20,
        fontWeight: "600",
      }}>{label}</ThemedText>
    </Pressable>
}
const styles = StyleSheet.create({
    textBig: {
        fontSize: 25,
        fontWeight: "600"
    },
    topbar: {
        paddingTop: 20        
    },
    themeSelectorContainer: {
        flex: 1
    },
    themeSelectorChild: {
    
    }
})