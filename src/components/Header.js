import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
const Header = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      "insta-bold": require("../assets/fonts/insta-bold.otf"),
    }).then(() => setFontsLoaded(true));
  };

  useEffect(() => {
    loadFonts();
    if (!fontsLoaded) {
      SplashScreen.preventAutoHideAsync();
    } else {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  return (
    fontsLoaded && (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8}>
          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            style={styles.text}
          >
            Instagram
          </Text>
        </TouchableOpacity>
        <View style={styles.iconsContainer}>
          {/*  Icons made by "https://www.freepik.com" title="Freepik" from "https://www.flaticon.com/" www.flaticon.com'*/}
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/plus.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              style={[styles.icon, styles.heartIcon]}
              source={require("../assets/icons/heart.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>11</Text>
            </View>
            <Image
              style={styles.icon}
              source={require("../assets/icons/messenger.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    // backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontFamily: "insta-bold",
  },
  icon: {
    height: 22,
    width: 22,
    marginLeft: 15,
    resizeMode: "contain",
  },
  heartIcon: {
    height: 25,
    width: 25,
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});
export default Header;
