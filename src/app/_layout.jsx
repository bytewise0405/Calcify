// React's Hook Imports
import { useEffect } from "react";

// App's Context Imports
import { ThemeState } from "../contexts";

// App's Internal Imports
import { Navigation } from "../components";

// App's External Imports
import { usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import analytics from "@react-native-firebase/analytics";

const RootLayout = () => {
  const path_name = usePathname();

  const screen_tracking = async (path_name) => {
    await analytics().logScreenView({
      screen_name: path_name,
      screen_class: path_name,
    });
  };

  useEffect(() => {
    screen_tracking(path_name);
  }, [path_name]);

  return (
    <ThemeState>
      <StatusBar style="auto" animated={true} translucent={false} />
      <Navigation />
    </ThemeState>
  );
};

export default RootLayout;
