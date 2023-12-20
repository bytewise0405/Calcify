// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Constant Imports
import { screen_width, screen_height } from "../../../src/constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    container: {
      height: screen_height,
      marginBottom: 0.028 * screen_height,
      paddingHorizontal: 0.05 * screen_width,
      backgroundColor: colors.primary_background_color,
    },
    license: {
      borderRadius: 0.018 * screen_height,
      marginBottom: 0.025 * screen_height,
      paddingVertical: 0.018 * screen_height,
      paddingHorizontal: 0.0375 * screen_width,
      backgroundColor: colors.tertiary_background_color,
    },
    license_title: {
      fontFamily: "semi_bold",
      fontSize: 0.0174 * screen_height,
      color: colors.primary_text_color,
    },
    license_content: {
      fontFamily: "regular",
      fontSize: 0.015 * screen_height,
      marginTop: 0.006 * screen_height,
      color: colors.primary_text_color,
    },
    external_url: {
      fontFamily: "regular",
      fontSize: 0.015 * screen_height,
      color: colors.tertiary_text_color,
    },
  });
};

export default get_computed_style;
