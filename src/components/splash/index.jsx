// React's Hook Imports
import { useEffect } from "react";

// React Native's Component Imports
import { Text, View, Image } from "react-native";

// App's Internal Imports
import { screen_height } from "../../constants";
const app_icon = require("../../../assets/app/icon.png");
import get_computed_style from "../../../assets/styles/splash";

// App's External Imports
import { useTheme } from "@react-navigation/native";
import Animated, { withSpring, useSharedValue } from "react-native-reanimated";

const Splash = () => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);

  const app_icon_wrapper_1 = useSharedValue(0);
  const app_icon_wrapper_2 = useSharedValue(0);

  const onboarding_animation = () => {
    setTimeout(() => {
      app_icon_wrapper_1.value = withSpring(
        app_icon_wrapper_1.value + 0.05 * screen_height
      );
    }, 150);

    setTimeout(() => {
      app_icon_wrapper_2.value = withSpring(
        app_icon_wrapper_2.value + 0.0125 * screen_height
      );
    }, 100);
  };

  useEffect(() => {
    onboarding_animation();

    return () => {
      app_icon_wrapper_1.value = 0;
      app_icon_wrapper_2.value = 0;
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.app_icon_wrapper_1, { padding: app_icon_wrapper_1 }]}
      >
        <Animated.View
          style={[styles.app_icon_wrapper_2, { padding: app_icon_wrapper_2 }]}
        >
          <Image source={app_icon} style={styles.app_icon} />
        </Animated.View>
      </Animated.View>

      <View style={styles.app_info_wrapper}>
        <Text style={styles.app_name}>Calcify</Text>

        <Text style={styles.app_slogan}>
          Effortless Math, Anytime, Anywhere
        </Text>
      </View>
    </View>
  );
};

export default Splash;
