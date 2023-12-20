// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width, screen_height } from "../../../src/constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 0.05 * screen_width,
      backgroundColor: colors.primary_background_color,
    },
    term: {
      paddingBottom: 0.018 * screen_height,
    },
    term_title: {
      fontFamily: "semi_bold",
      fontSize: 0.0192 * screen_height,
      color: colors.primary_text_color,
    },
    term_content: {
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
    footer_section: {
      paddingBottom: 0.018 * screen_height,
    },
  });
};

export default get_computed_style;
