// React's Hook Imports
import { useState, useEffect } from "react";

// App's Internal Imports
import ThemeContext from "./ThemeContext";

// App's External Imports
import AsyncStorage from "@react-native-async-storage/async-storage";

const ThemeState = ({ children }) => {
  const [theme, set_theme] = useState("light");

  const change_theme = async (type) => {
    set_theme(type);
    await AsyncStorage.setItem("theme", type);
  };

  const fetch_saved_theme = async () => {
    const fetched_saved_theme = await AsyncStorage.getItem("theme");

    if (fetched_saved_theme) {
      set_theme(fetched_saved_theme);
    } else {
      change_theme("light");
    }
  };

  useEffect(() => {
    fetch_saved_theme();

    return () => {
      set_theme("light");
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, change_theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
