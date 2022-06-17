import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import { Divider } from "react-native-elements";
import PostImage from "./PostImage";
import { postFooterIcons } from "../data/postFooterIcons";
import PostFooter from "./PostFooter";
const Post = ({ post }) => {
  return (
    <View
      style={{
        color: "white",
        marginBottom: 30,
      }}
    >
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter />
    </View>
  );
};

const styles = StyleSheet.create({});
export default Post;
