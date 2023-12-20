// App's Constant Imports
import { screen_width, screen_height } from "../../constants";

// App's Internal Imports
import { Header, SidePanel } from "../../components";
import get_computed_style from "../../../assets/styles/drawer_layout";

// App's External Imports
import { Drawer } from "expo-router/drawer";
import { useTheme } from "@react-navigation/native";
import { Feather, Ionicons, Octicons } from "react-native-vector-icons";

const DrawerLayout = () => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);

  const drawer_content = (side_panel_content) => {
    return <SidePanel {...side_panel_content} />;
  };

  const screen_options = {
    drawerItemStyle: styles.drawer_item,
    drawerLabelStyle: styles.drawer_label,
    drawerActiveBackgroundColor: colors.drawer_active_background_color,
    header: ({ navigation }) => {
      return <Header navigation={navigation} />;
    },
  };

  return (
    <Drawer
      initialRouteName="/home"
      drawerContent={drawer_content}
      screenOptions={screen_options}
    >
      <Drawer.Screen
        name="home/index"
        options={{
          drawerLabel: "Home",
          drawerIcon: () => {
            return <Feather name="home" style={styles.drawer_icon} />;
          },
          drawerItemStyle: {
            marginTop: 0.03 * screen_height,
            paddingHorizontal: 0.0125 * screen_width,
          },
        }}
      />
      <Drawer.Screen
        name="legal/licenses"
        options={{
          drawerLabel: "Licenses",
          drawerIcon: () => {
            return <Octicons name="terminal" style={styles.drawer_icon} />;
          },
        }}
      />
      <Drawer.Screen
        name="legal/privacy_policy"
        options={{
          drawerLabel: "Privacy Policy",
          drawerIcon: () => {
            return <Feather name="lock" style={styles.drawer_icon} />;
          },
        }}
      />
      <Drawer.Screen
        name="legal/terms_of_service"
        options={{
          drawerLabel: "Terms of Service",
          drawerIcon: () => {
            return (
              <Ionicons
                style={styles.drawer_icon}
                name="document-text-outline"
              />
            );
          },
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
