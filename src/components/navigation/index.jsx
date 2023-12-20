// React's Hook Imports
import { useState, useEffect, useContext } from "react";

// App's Context Imports
import { ThemeContext } from "../../contexts";

// App's Constant Imports
import { dark_theme, light_theme } from "../../constants";

// App's Internal Imports
import { fetch_remote_config } from "../../modules";
import VersionControl from "../utils/VersionControl";

// App's External Imports
import { Slot } from "expo-router";
import { ThemeProvider } from "@react-navigation/native";
import analytics from "@react-native-firebase/analytics";
import crashlytics from "@react-native-firebase/crashlytics";

const Navigation = () => {
  try {
    const { theme } = useContext(ThemeContext);
    const [is_visible, set_is_visible] = useState(false);
    const [critical_update_download_url, set_critical_update_download_url] =
      useState("");

    const initiate_analytics = async () => {
      await analytics().logAppOpen();
    };

    useEffect(() => {
      initiate_analytics();

      fetch_remote_config(set_is_visible, set_critical_update_download_url);
    }, []);

    return (
      <ThemeProvider value={theme === "light" ? light_theme : dark_theme}>
        <Slot />
        <VersionControl
          is_visible={is_visible}
          critical_update_download_url={critical_update_download_url}
        />
      </ThemeProvider>
    );
  } catch (error) {
    crashlytics().recordError(error);
  }
};

export default Navigation;
