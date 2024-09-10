import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Top from "../../components/Top";
import Middle from "../../components/Middle";
import Bottom from "../../components/Bottom";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView  style={styles.backgroundImage}>
      <ImageBackground
       
        source={require("../../../assets/bg.png")}
        // blurRadius={1}
      >
        <View style={styles.container}>
          <Top />
          <Middle />
          <Bottom/>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});