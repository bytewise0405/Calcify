// React Native's Component Imports
import { StyleSheet } from "react-native";

// App's Constant Imports
import { screen_height } from "../../src/constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    promotional_information_container: {
      alignSelf: "center",
      flexDirection: "row",
    },
    promotional_information_title: {
      fontFamily: "medium",
      fontSize: 0.0175 * screen_height,
      color: colors.primary_text_color,
    },
    promotional_information_value: {
      fontFamily: "medium",
      fontSize: 0.0175 * screen_height,
      color: colors.tertiary_text_color,
    },
    application_information_container: {
      alignSelf: "center",
      flexDirection: "row",
    },
    application_information_title: {
      fontFamily: "regular",
      color: colors.primary_text_color,
      fontSize: 0.01225 * screen_height,
    },
    application_information_value: {
      fontFamily: "regular",
      color: colors.tertiary_text_color,
      fontSize: 0.01225 * screen_height,
    },
  });
};

export default get_computed_style;
