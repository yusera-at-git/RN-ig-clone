import { View, Text, Image } from "react-native";
import React from "react";

const PostImage = ({ post }) => {
  return (
    <View
      style={{
        height: 500,
        width: "100%",
      }}
    >
      <Image
        source={{ uri: post.imageUrl }}
        style={{
          height: "100%",
          resizeMode: "cover",
        }}
      />
    </View>
  );
};

export default PostImage;
