import React, { useState, useRef } from "react";
import { Pressable, Animated } from "react-native";
import styles from "./colorSwitcher.styles";
import { getRandomColor } from "../../utils/helper";
import { color } from "../../utils/color";
import AnimatedCircle from "../AnimatedCircle";
import DisplayText from "../DisplayText";

const ColorSwitcher = ({ initialColor = color }) => {
  const [color, setColor] = useState(initialColor);
  const animation = useRef(new Animated.Value(0)).current;

  const randomColorHandler = () => {
    setColor(getRandomColor());
    animation.setValue(0);
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [color, getRandomColor()],
  });

  return (
    <Pressable onPress={randomColorHandler} style={styles.container}>
      <AnimatedCircle backgroundColor={backgroundColor} animation={animation} />
      <DisplayText text={"Hello there!"} />
    </Pressable>
  );
};

export default ColorSwitcher;
