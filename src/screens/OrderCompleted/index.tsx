import { Text, View } from "react-native";
import Animated, { FadeIn, LightSpeedInLeft } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

import OrderHero from "../../assets/orderhero.svg";
import { Button } from "../../components/Button";
import { useCart } from "../../hooks/useCart";

import { styles } from "./styles";

export function OrderCompleted() {
  const { reset } = useCart();
  const navigation = useNavigation();

  function handleGoToHome() {
    reset();
    navigation.navigate("home");
  }

  return (
    <View style={styles.container}>
      <Animated.View entering={LightSpeedInLeft.duration(700)}>
        <OrderHero />
      </Animated.View>

      <View style={styles.content}>
        <Animated.Text
          style={styles.title}
          entering={LightSpeedInLeft.duration(600).delay(400)}
        >
          Uhu! Bánh mì đang được giao!
        </Animated.Text>
        <Animated.Text
          style={styles.description}
          entering={LightSpeedInLeft.duration(500).delay(600)}
        >
        
          Chúc quý khách ngon miệng!
        </Animated.Text>
      </View>

      <Animated.View
        style={{ width: "100%" }}
        entering={FadeIn.duration(500).delay(1500).springify()}
      >
        <Button label="HOÀN TẤT" onPress={handleGoToHome} />
      </Animated.View>
    </View>
  );
}
