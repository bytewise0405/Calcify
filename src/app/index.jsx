// React's Hook Imports
import { useCallback } from "react";

// App's Internal Imports
import { Splash } from "../components";
const poppins_medium = require("../../assets/fonts/poppins_medium.ttf");
const poppins_regular = require("../../assets/fonts/poppins_regular.ttf");
const poppins_semi_bold = require("../../assets/fonts/poppins_semi_bold.ttf");

// App's External Imports
import { router } from "expo-router";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Root = () => {
  const [fonts_loaded] = useFonts({
    medium: poppins_medium,
    regular: poppins_regular,
    semi_bold: poppins_semi_bold,
  });

  const on_layout_root_view = useCallback(async () => {
    if (fonts_loaded) {
      setTimeout(() => {
        router.push("/home");
      }, 2500);
    }
  }, [fonts_loaded]);

  if (!fonts_loaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={on_layout_root_view}>
      <Splash />
    </SafeAreaProvider>
  );
};

export default Root;
