import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { USERS } from "../data/users";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
const Stories = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginBottom: 13,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => {
          console.log(`${story.image}`);
          return (
            <View key={index}>
              <View
                style={{
                  position: "relative",
                }}
              >
                {story.id == 1 && (
                  <View
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 4,
                      zIndex: 1,
                      backgroundColor: "white",
                      borderRadius: 50,
                    }}
                  >
                    <Entypo name="circle-with-plus" size={22} color="blue" />
                  </View>
                )}
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.storyContainer}
                  onPress={() => navigation.push("Status")}
                >
                  <Image
                    style={styles.story}
                    source={{
                      uri: story.image,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.user}>
                {story.user.length > 11
                  ? story.user.slice(0, 10).toLowerCase() + "..."
                  : story.user}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    height: 70,
    width: 70,
    borderRadius: 50,
    resizeMode: "contain",
  },
  storyContainer: {
    marginLeft: 6,
    padding: 4,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ff8501",
    borderRadius: 50,
  },
  user: {
    color: "white",
    textAlign: "center",
  },
});
export default Stories;
