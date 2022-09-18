import { StyleSheet } from "react-native";
export default StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",

    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
  triangleDown: {
    transform: [{ rotate: "180deg" }],
  },
  triangleRight: {
    transform: [{ rotate: "90deg" }],
  },
  triangleLeft: {
    transform: [{ rotate: "-90deg" }],
  },
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightColor: "transparent",
  },
  triangleCornerBottomRight: {
    transform: [{ rotate: "180deg" }],
  },
  triangleCornerTopRight: {
    transform: [{ rotate: "90deg" }],
  },
  triangleCornerBottomLeft: {
    transform: [{ rotate: "270deg" }],
  },
});