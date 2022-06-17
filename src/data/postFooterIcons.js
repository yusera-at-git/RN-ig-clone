import { Image } from "react-native";
export const postFooterIcons = [
  {
    name: "Like",
    imageUrl: (
      <Image
        style={{
          width: 24,
          height: 24,
          marginRight: 15,
          resizeMode: "contain",
        }}
        source={require("../assets/icons/heart.png")}
      />
    ),
    likedImageUrl: (
      <Image
        style={{
          width: 24,
          height: 24,
          marginRight: 15,
          resizeMode: "contain",
        }}
        source={require("../assets/icons/likedIcon.png")}
      />
    ),
  },
  {
    name: "Comment",
    imageUrl: (
      <Image
        style={{
          width: 24,
          height: 24,
          marginRight: 15,
          resizeMode: "contain",
        }}
        source={require("../assets/icons/comment.png")}
      />
    ),
  },
  {
    name: "Share",
    imageUrl: (
      <Image
        style={{
          width: 24,
          height: 24,
          resizeMode: "contain",
        }}
        source={require("../assets/icons/share.png")}
      />
    ),
  },
  {
    name: "Save",
    imageUrl: (
      <Image
        style={{
          width: 24,
          height: 24,
          resizeMode: "contain",
        }}
        source={require("../assets/icons/save.png")}
      />
    ),
    savedImageUrl: (
      <Image
        style={{
          width: 24,
          height: 24,
          marginRight: 15,
          resizeMode: "contain",
        }}
        source={require("../assets/icons/savedImage.png")}
      />
    ),
  },
];
