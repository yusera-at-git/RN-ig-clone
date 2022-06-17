import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { USERS } from "../data/users";
const Stories = () => {
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
            <View key={index} style={styles.storyContainer}>
              <Image
                style={styles.story}
                source={{
                  uri: story.image,
                }}
              />
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
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
    resizeMode: "contain",
  },
  storyContainer: {
    alignItems: "center",
  },
  user: {
    color: "white",
  },
});
export default Stories;
