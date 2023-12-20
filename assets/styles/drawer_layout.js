// React Native's Component Imports
import { StyleSheet } from "react-native";

// App's Constant Imports
import { screen_width, screen_height } from "../../src/constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    drawer_item: {
      paddingHorizontal: 0.0125 * screen_width,
    },
    drawer_label: {
      fontFamily: "regular",
      fontSize: 0.0174 * screen_height,
      color: colors.primary_text_color,
      paddingTop: 0.006 * screen_height,
      marginLeft: -0.03125 * screen_width,
    },
    drawer_icon: {
      fontSize: 0.024 * screen_height,
      color: colors.primary_text_color,
    },
  });
};

export default get_computed_style;
