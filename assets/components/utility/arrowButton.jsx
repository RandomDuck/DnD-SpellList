import React from "react";
import { TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import styles from "../styles/arrowStyle.js";
const arrowTypes = {
  triangleUp: 'triangleUp',
  triangleDown: 'triangleDown',
  triangleRight: 'triangleRight',
  triangleLeft: 'triangleLeft',
  triangleCornerTopLeft: 'triangleCornerTopLeft',
  triangleCornerBottomRight: 'triangleCornerBottomRight',
  triangleCornerTopRight: 'triangleCornerTopRight',
  triangleCornerBottomLeft: 'triangleCornerBottomLeft'
}
const ArrowButton = ({ onPress, width = 50, height = 100, arrowType, feedback = false, color = "#000", style }) => {
  let type = {};
  switch (arrowType) {
    case arrowTypes.triangleUp:
      type = styles.triangle
      break;
    case arrowTypes.triangleDown:
      type = { ...styles.triangle, ...styles.triangleDown }
      break;
    case arrowTypes.triangleRight:
      type = { ...styles.triangle, ...styles.triangleRight }
      break;
    case arrowTypes.triangleLeft:
      type = { ...styles.triangle, ...styles.triangleLeft }
      break;
    case arrowTypes.triangleCornerTopLeft:
      type = styles.triangleCorner
      break;
    case arrowTypes.triangleCornerBottomRight:
      type = { ...styles.triangleCorner, ...styles.triangleCornerBottomRight }
      break;
    case arrowTypes.triangleCornerTopRight:
      type = { ...styles.triangleCorner, ...styles.triangleCornerTopRight }
      break;
    case arrowTypes.triangleCornerBottomLeft:
      type = { ...styles.triangleCorner, ...styles.triangleCornerBottomLeft }
      break;
    default:
      type = styles.triangle
      break;
  }
  let colorObj = {}
  if (arrowTypes.triangleCornerTopLeft == arrowType ||
    arrowTypes.triangleCornerBottomRight == arrowType ||
    arrowTypes.triangleCornerTopRight == arrowType ||
    arrowTypes.triangleCornerBottomLeft == arrowType) {
    colorObj['borderTopColor'] = color;
    colorObj['borderRightWidth'] = height
    colorObj['borderTopWidth'] = height
  } else {
    colorObj['borderRightWidth'] = width
    colorObj['borderLeftWidth'] = width
    colorObj['borderBottomWidth'] = height
    colorObj['borderBottomColor'] = color;
  }
  const styleObj = { ...type, ...colorObj, ...style }

  if (feedback) {
    return <TouchableOpacity onPress={onPress} style={[styleObj, { padding: 1 }]} />;
  } else {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styleObj} />
      </TouchableWithoutFeedback>
    );
  }
}
export { arrowTypes, ArrowButton };