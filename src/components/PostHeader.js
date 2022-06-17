import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const PostHeader = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.story} source={{ uri: post.profile_picture }} />
        <Text style={styles.user}>{post.user}</Text>
      </View>

      <Text style={styles.moreText}>...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  story: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
    resizeMode: "contain",
  },
  user: {
    color: "white",
    marginLeft: 5,
    fontWeight: "700",
  },
  moreText: {
    color: "white",
    fontWeight: "900",
  },
});
export default PostHeader;
