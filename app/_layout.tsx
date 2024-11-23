import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot, Stack } from "expo-router";

export default function Layout() {
    return <GestureHandlerRootView>
        <Stack screenOptions={{
            headerShown:false
        }}>
            {/* <Stack.Screen name="account" options={{headerShown:true, headerTitle:"Account Info", headerBackTitle: "Go Back"}}/> */}
        </Stack>
    </GestureHandlerRootView>
}