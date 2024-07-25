import React from "react";
import { View } from "react-native";
import ColorSwitcher from "../../components/ColorSwitcher";
import { getRandomColor } from "../../utils/helper";
import styles from "./home.styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <ColorSwitcher initialColor={getRandomColor()} />
    </View>
  );
};

export default Home;
