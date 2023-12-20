// React's Hook Imports
import { useContext } from "react";

// App's Context Imports
import { ThemeContext } from "../../contexts";

// App's Internal Imports
import get_computed_style from "../../../assets/styles/header";

// App's External Imports
import { useTheme } from "@react-navigation/native";
import analytics from "@react-native-firebase/analytics";
import { Text, View, TouchableOpacity } from "react-native";
import { Feather, Octicons } from "react-native-vector-icons";

const Header = ({ navigation }) => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);
  const { theme, change_theme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={async () => {
          navigation.toggleDrawer();

          await analytics().logEvent("toggle_drawer");
        }}
      >
        <Octicons name="three-bars" style={styles.utility_icon} />
      </TouchableOpacity>

      <Text style={styles.logo}>Calcify</Text>

      <TouchableOpacity
        onPress={async () => {
          change_theme(theme === "light" ? "dark" : "light");

          await analytics().logEvent("change_theme", {
            theme: theme === "light" ? "dark" : "light",
          });
        }}
      >
        <Feather
          style={styles.utility_icon}
          name={theme === "light" ? "sun" : "moon"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
