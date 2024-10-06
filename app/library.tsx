import { SplitView } from "@/components/SplitView";
import { useWallpapers } from "@/hooks/useWallpapers";
import { Text, View } from "react-native";

export default function library() {
  const wallpapers = useWallpapers();
  return (
    <View>
      <SplitView wallpapers={wallpapers}>
    </View>
  );
}
