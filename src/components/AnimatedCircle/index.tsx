import React from "react";
import { Animated } from "react-native";
import styles from "./animatedCircle.styles";

type AnimatedCircleType = {
  backgroundColor: Animated.AnimatedInterpolation<0 | 1>;
  animation: Animated.Value;
};

const AnimatedCircle = ({ backgroundColor, animation }: AnimatedCircleType) => {
  return (
    <Animated.View
      style={[
        styles.circle,
        {
          backgroundColor: backgroundColor,
          transform: [{ scale: animation }],
        },
      ]}
    />
  );
};

export default AnimatedCircle;
