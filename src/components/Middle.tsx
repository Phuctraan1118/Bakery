import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors2";

export default function Middle() {
  return (
    <View style={styles.main}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri : "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/339981915_1665665433892939_4312049707260842270_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Bx8Ww8XxdvcQ7kNvgEgUvI2&_nc_ht=scontent.fsgn17-1.fna&gid=AU9l5NfjB9BmRUEMJ43cTSJ&oh=00_AYB9M2Boam_MyI7aLVBGttu1Tip75UewsscyKCMvoKVCjg&oe=66AE8253"}} />
        <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
          Tran Thien Phuc
        </Text>
        <Text
          style={{ fontSize: 16, color: Colors.darkGray, fontWeight: "500" }}
        >
          thienphucrt@gmail.com
        </Text>
      </View>

      <View style={styles.middleSectionTextContainer}>
        <View style={styles.middleSectionText}>
          <Text style={styles.toptext}>Applied</Text>
          <Text style={styles.bottomtext}>28</Text>
        </View>
        <View style={styles.middleSectionText}>
          <Text style={styles.toptext}>Reviewed</Text>
          <Text style={styles.bottomtext}>73</Text>
        </View>
        <View style={styles.middleSectionText}>
        <Text style={styles.toptext}>Contacted</Text>
              <Text style={styles.bottomtext}>18</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 30,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 5,
  },
  middleSectionTextContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  middleSectionText: {
    justifyContent: "center",
    alignItems: "center",
  },
  toptext: {
    fontSize: 16,
    color:  Colors.white,
    fontWeight: "bold",
  },
  bottomtext: {
    fontSize: 16,
    color: Colors.darkGray,
    fontWeight: "700",
  },
});
