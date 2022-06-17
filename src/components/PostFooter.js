import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { postFooterIcons } from "../data/postFooterIcons";

const PostFooter = ({}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Icon imageUrl={postFooterIcons[0].imageUrl} />
        <Icon imageUrl={postFooterIcons[1].imageUrl} />
        <Icon imageUrl={postFooterIcons[2].imageUrl} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
        }}
      >
        <Icon imageUrl={postFooterIcons[3].imageUrl} />
      </View>
    </View>
  );
};
const Icon = ({ imageStyle, imageUrl }) => {
  return <TouchableOpacity>{imageUrl}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
});
export default PostFooter;
