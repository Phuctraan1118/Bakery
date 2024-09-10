import { useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Animated, {
  Layout,
  SlideInDown,
  SlideInRight,
  SlideOutDown,
  SlideOutRight,
  ZoomIn,
} from "react-native-reanimated";
import { Swipeable } from "react-native-gesture-handler";

import { CheckFat, ShoppingCart as ShoppingCartPhosphor, Trash } from "phosphor-react-native";
import { NavHeader } from "../../../components/NavHeader";
import { CoffeePrice } from "../../../components/CoffeePrice";
import { Button } from "../../../components/Button";
import { CartItem } from "../../../components/CartItem";

import { useCart } from "../../../hooks/useCart";

import { styles } from "./styles";
import { THEME } from "../../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import { CoffeeCartData } from "../../../context/CartContext";




const initialData : CoffeeCartData[] = [
  {
    "id": "1",
    "image": "https://example.com/images/item1.jpg",
    "title": "Red T-Shirt",
    "size": "M",
    "amount": 2,
    "price": 19.99
  },
  {
    "id": "2",
    "image": "https://example.com/images/item2.jpg",
    "title": "Blue Jeans",
    "size": "L",
    "amount": 1,
    "price": 39.99
  },
  {
    "id": "3",
    "image": "https://example.com/images/item3.jpg",
    "title": "Black Sneakers",
    "size": "42",
    "amount": 1,
    "price": 59.99
  },
  {
    "id":"4",
    "image": "https://example.com/images/item4.jpg",
    "title": "White Hat",
    "size": "One Size",
    "amount": 3,
    "price": 9.99
  },
  {
    "id": "5",
    "image": "https://example.com/images/item5.jpg",
    "title": "Green Jacket",
    "size": "XL",
    "amount": 1,
    "price": 49.99
  },
  {
    "id": "6",
    "image": "https://example.com/images/item6.jpg",
    "title": "Yellow Scarf",
    "size": "One Size",
    "amount": 2,
    "price": 14.99
  },
  {
    "id": "7",
    "image": "https://example.com/images/item7.jpg",
    "title": "Purple Gloves",
    "size": "L",
    "amount": 2,
    "price": 12.99
  },
  {
    "id":"8",
    "image": "https://example.com/images/item8.jpg",
    "title": "Gray Shorts",
    "size": "M",
    "amount": 1,
    "price": 24.99
  },
  {
    "id": "9",
    "image": "https://example.com/images/item9.jpg",
    "title": "Orange Socks",
    "size": "L",
    "amount": 5,
    "price": 4.99
  },
  {
    "id": "10",
    "image": "https://example.com/images/item10.jpg",
    "title": "Pink Sunglasses",
    "size": "One Size",
    "amount": 1,
    "price": 19.99
  }
]

export function OrderScreen() {
  const { totalValue, cart, remove } = useCart();
  const [dataCard, setDataCard] = useState<CoffeeCartData[]>(initialData);
  const swipeableRefs = useRef<Swipeable[]>([]);

  const handleRemoveData = (id: string, index: number) => {
    setDataCard((prevData: any) => prevData.filter((item : any) => item.id !== id));
    swipeableRefs.current.splice(index, 1); 
  };
  const navigation = useNavigation();

  function handleRemove(id: string, index: number) {
    swipeableRefs.current[index].close();

    remove(id);
  }

  function handleViewCoffees() {
    navigation.navigate("home");
  }

  function handleCompleteOrder() {
    navigation.navigate("order_completed");
  }


  return (
    <View style={styles.container}>
      <NavHeader title="Hóa đơn" variant="light" />

      <ScrollView
        contentContainerStyle={[
          styles.scrollViewContainer,
          { borderTopWidth: cart.length > 0 ? 1 : 0 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {dataCard.length === 0 && (
          <Animated.View
            entering={ZoomIn.duration(400).delay(300)}
            layout={Layout.springify().duration(400)}
            style={styles.emptyContainer}
          >
            <View style={styles.contentEmpty}>
              <ShoppingCartPhosphor color={THEME.COLORS.BASE_GRAY_500} weight="fill" />
              <Text style={styles.textEmptyContainer}>Không có sản phẩm nào</Text>
            </View>
            <Button label="Thêm bánh" variant="purple" onPress={handleViewCoffees} />
          </Animated.View>
        )}

        {dataCard.map((item, index) => (
         <Animated.View
         key={item.id}
         entering={SlideInRight.duration(600).delay(200 * index)}
         exiting={SlideOutRight.duration(400)}
         layout={Layout.springify().duration(400)}
       >
         <Swipeable
           ref={(ref) => {
             if (ref) {
               swipeableRefs.current.push(ref);
             }
           }}
           overshootLeft={false}
           containerStyle={styles.swipeableContainer}
           leftThreshold={50}
           onSwipeableOpen={() => handleRemoveData(item.id, index)}
           renderRightActions={() => (
             <View style={styles.swipeableComplete}>
               <CheckFat size={32} color={THEME.COLORS.SUCCESS_GREEN_DARK} />
             </View>
           )}
           renderLeftActions={() => (
             <View style={styles.swipeableRemove}>
               <Trash size={32} color={THEME.COLORS.ERROR_RED_DARK} />
             </View>
           )}
         >
           <CartItem cart={item} />
         </Swipeable>
       </Animated.View>
        ))}
      </ScrollView>

      {cart.length > 0 && (
        <Animated.View
          entering={SlideInDown.duration(500)}
          exiting={SlideOutDown.duration(600)}
          layout={Layout.springify().duration(400)}
          style={styles.containerConfirmOrder}
        >
          <View style={styles.confirmOrderContent}>
            <Text style={styles.confirmOrderText}>Tổng cộng</Text>
            <CoffeePrice size="md" price={totalValue} variant="dark" />
          </View>
          <Button
            label="THANH TOÁN"
            variant="yellow"
            onPress={handleCompleteOrder}
          />
        </Animated.View>
      )}
    </View>
  );
}
