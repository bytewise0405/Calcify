// React Native's Component Imports
import { StyleSheet } from "react-native";

// App's Constant Imports
import { screen_width, screen_height } from "../../src/constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.app_icon_background_color,
    },
    app_icon_wrapper_1: {
      borderRadius: screen_height,
      backgroundColor: "#FFFFFF40",
    },
    app_icon_wrapper_2: {
      borderRadius: screen_height,
      backgroundColor: "#FFFFFF80",
    },
    app_icon: {
      resizeMode: "contain",
      width: 0.575 * screen_width,
      height: 0.275 * screen_height,
    },
    app_info_wrapper: {
      alignItems: "center",
      marginTop: 0.075 * screen_height,
    },
    app_name: {
      color: "#000000",
      fontFamily: "semi_bold",
      fontSize: 0.0425 * screen_height,
    },
    app_slogan: {
      color: "#000000",
      fontFamily: "regular",
      marginTop: -0.01 * screen_height,
      fontSize: 0.01675 * screen_height,
    },
  });
};

export default get_computed_style;
