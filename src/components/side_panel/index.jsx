// React Native's Component Imports
import { Text, View, Image } from "react-native";

// App's Internal Imports
import Footer from "../footer";
const app_icon = require("../../../assets/app/icon.png");
import get_computed_style from "../../../assets/styles/side_panel";

// App's External Imports
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useTheme } from "@react-navigation/native";

const SidePanel = (side_panel_content) => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);

  return (
    <DrawerContentScrollView
      {...side_panel_content}
      contentContainerStyle={styles.container}
    >
      <View style={styles.drawer_header}>
        <View style={styles.app_info_wrapper}>
          <Image source={app_icon} style={styles.app_icon} />

          <View>
            <Text style={styles.app_name}>Calcify</Text>
            <Text style={styles.app_slogan}>
              Effortless Math, Anytime, Anywhere
            </Text>
          </View>
        </View>

        <DrawerItemList {...side_panel_content} />
      </View>

      <View style={styles.drawer_footer}>
        <Footer />
      </View>
    </DrawerContentScrollView>
  );
};

export default SidePanel;
