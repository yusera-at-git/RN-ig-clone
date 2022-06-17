import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Post from "../components/Post";
import { POSTS } from "../data/posts";

const Home = () => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => {
          return <Post key={index} post={post} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "black",
    flex: 1,
  },
});
export default Home;
