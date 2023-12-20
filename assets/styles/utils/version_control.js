// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Constant Imports
import { screen_width, screen_height } from "../../../src/constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    version_control_section: {
      elevation: 2.5,
      alignItems: "center",
      width: 0.8 * screen_width,
      height: 0.55 * screen_height,
      justifyContent: "space-evenly",
      borderRadius: 0.012 * screen_height,
      backgroundColor: colors.secondary_background_color,
    },
    version_control_icon: {
      width: 0.25 * screen_width,
      height: 0.12 * screen_height,
      marginBottom: 0.025 * screen_height,
    },
    version_control_content: {
      width: 0.65 * screen_width,
    },
    version_control_title: {
      textAlign: "center",
      fontFamily: "semi_bold",
      fontSize: 0.0186 * screen_height,
      color: colors.primary_text_color,
      marginBottom: 0.006 * screen_height,
    },
    version_control_description: {
      textAlign: "center",
      fontFamily: "regular",
      fontSize: 0.0144 * screen_height,
      color: colors.secondary_text_color,
    },
    version_control_button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 0.65 * screen_width,
      height: 0.075 * screen_height,
      borderRadius: 0.012 * screen_height,
      marginVertical: 0.018 * screen_height,
      backgroundColor: colors.tertiary_text_color,
    },
    version_control_button_text: {
      color: "white",
      fontFamily: "medium",
      fontSize: 0.0174 * screen_height,
    },
  });
};

export default get_computed_style;
