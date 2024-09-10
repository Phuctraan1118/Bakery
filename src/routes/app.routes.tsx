import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Details } from "../screens/Details";
import { ShoppingCart } from "../screens/ShoppingCart";
import { OrderCompleted } from "../screens/OrderCompleted";
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
import TabNavigator from "../screens/Home/BottomTab";
import OTPScreen from "../screens/Auth/EnterOTP";
import PickerAddress from "../components/PickerAddress";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="login" component={Login} />
      <Screen name="signup" component={Register} />
      <Screen name="otp" component={OTPScreen} />
      <Screen name="picker" component={PickerAddress} />
      <Screen name="home" component={TabNavigator} />
      <Screen name="details" component={Details} />
      <Screen name="shopping_cart" component={ShoppingCart} />
      <Screen name="order_completed" component={OrderCompleted} />
    </Navigator>
  );
}
