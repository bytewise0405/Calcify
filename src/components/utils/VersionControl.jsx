// React Native Component Imports
import {
  Text,
  View,
  Modal,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";

// App's Internal Imports
const update_icon = require("../../../assets/images/update.png");
import get_computed_style from "../../../assets/styles/utils/version_control";

// App's External Imports
import { useTheme } from "@react-navigation/native";

const VersionControl = ({ is_visible, critical_update_download_url }) => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);

  return (
    <Modal transparent={true} visible={is_visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.version_control_section}>
          <Image source={update_icon} style={styles.version_control_icon} />
          <View style={styles.version_control_content}>
            <Text style={styles.version_control_title}>
              App Update Required!
            </Text>
            <Text style={styles.version_control_description}>
              We have added new features and fix some bugs to make your
              experience seamless
            </Text>
          </View>

          <TouchableOpacity
            style={styles.version_control_button}
            onPress={async () => {
              await Linking.openURL(critical_update_download_url);
            }}
          >
            <Text style={styles.version_control_button_text}>Update App</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default VersionControl;
