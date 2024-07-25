import React from "react";
import { Text } from "react-native";
import styles from "./displayText.styles";

type DisplayTextType = {
  text: string;
};
const DisplayText = ({ text }: DisplayTextType) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default DisplayText;
