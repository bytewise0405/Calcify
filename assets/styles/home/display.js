// React Native's Component Imports
import { StyleSheet } from "react-native";

// App's Constant Imports
import { screen_width, screen_height } from "../../../src/constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    container: {
      height: 0.25 * screen_height,
      backgroundColor: colors.primary_background_color,
    },
    display_calculations: {
      fontFamily: "medium",
      fontSize: 0.025 * screen_height,
      color: colors.secondary_text_color,
      paddingHorizontal: 0.025 * screen_width,
    },
    display_digits: {
      textAlign: "right",
      fontFamily: "medium",
      right: 0.065 * screen_width,
      bottom: 0.0175 * screen_height,
      fontSize: 0.054 * screen_height,
      color: colors.primary_text_color,
    },
  });
};

export default get_computed_style;
