// React Native's Component Imports
import { StyleSheet } from "react-native";

// App's Constant Imports
import { screen_width, screen_height } from "../../../src/constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.secondary_background_color,
    },
    handle_indicator: { backgroundColor: colors.secondary_text_color },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 0.015 * screen_height,
      paddingHorizontal: 0.03 * screen_width,
    },
    function_key: {
      alignItems: "center",
      justifyContent: "center",
      width: 0.21 * screen_width,
      height: 0.1 * screen_height,
      borderRadius: 0.024 * screen_height,
      backgroundColor: colors.function_key_color,
    },
    number_key: {
      alignItems: "center",
      justifyContent: "center",
      width: 0.21 * screen_width,
      height: 0.1 * screen_height,
      borderRadius: 0.024 * screen_height,
      backgroundColor: colors.number_key_color,
    },
    key_content: {
      fontFamily: "medium",
      fontSize: 0.0225 * screen_height,
      color: colors.primary_text_color,
    },
    key_icon: {
      fontSize: 0.026 * screen_height,
    },
  });
};

export default get_computed_style;
