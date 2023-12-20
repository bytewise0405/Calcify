// React Native's Component Imports
import { StyleSheet } from "react-native";

// App's Constant Imports
import { screen_width, screen_height } from "../../src/constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: 0.03 * screen_height,
      paddingVertical: 0.06 * screen_height,
      paddingHorizontal: 0.05 * screen_width,
      backgroundColor: colors.primary_background_color,
    },
    utility_icon: {
      fontSize: 0.03 * screen_height,
      color: colors.primary_text_color,
    },
    logo: {
      borderStyle: "dashed",
      fontFamily: "semi_bold",
      fontSize: 0.022 * screen_height,
      color: colors.primary_text_color,
      borderBottomWidth: 0.00425 * screen_width,
      borderBottomColor: colors.secondary_text_color,
    },
  });
};

export default get_computed_style;
