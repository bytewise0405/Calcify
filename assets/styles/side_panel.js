// React Native's Component Imports
import { StyleSheet } from "react-native";

// App's Constant Imports
import { screen_width, screen_height } from "../../src/constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: colors.primary_background_color,
    },
    drawer_header: {
      flex: 1,
      borderStyle: "dashed",
      marginTop: 0.012 * screen_height,
      borderBottomWidth: 0.00425 * screen_width,
      borderBottomColor: colors.secondary_text_color,
    },
    app_info_wrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 0.025 * screen_width,
    },
    app_icon: {
      resizeMode: "contain",
      borderRadius: screen_height,
      width: 0.1275 * screen_width,
      height: 0.06 * screen_height,
      backgroundColor: colors.app_icon_background_color,
    },
    app_name: {
      fontFamily: "semi_bold",
      fontSize: 0.0225 * screen_height,
      color: colors.primary_text_color,
    },
    app_slogan: {
      fontFamily: "regular",
      color: colors.primary_text_color,
      fontSize: 0.01075 * screen_height,
    },
    drawer_footer: { marginVertical: 0.024 * screen_height },
  });
};

export default get_computed_style;
