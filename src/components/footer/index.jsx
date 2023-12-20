// React Native's Component Imports
import { Text, View, Linking, TouchableOpacity } from "react-native";

// App's Internal Imports
import get_computed_style from "../../../assets/styles/footer";

// App's External Imports
import * as Application from "expo-application";
import { useTheme } from "@react-navigation/native";
import analytics from "@react-native-firebase/analytics";

const Footer = () => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);

  return (
    <>
      <View style={styles.promotional_information_container}>
        <Text style={styles.promotional_information_title}>Powered By </Text>
        <TouchableOpacity
          onPress={async () => {
            await analytics().logEvent("promotional_information_value", {
              value: "ByteWise",
            });

            await Linking.openURL("https://www.bytewise.ml");
          }}
        >
          <Text style={styles.promotional_information_value}>ByteWise</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.application_information_container}>
        <Text style={styles.application_information_title}>Developed By: </Text>
        <TouchableOpacity
          onPress={async () => {
            await Linking.openURL("https://github.com/bytewise0405");
          }}
        >
          <Text style={styles.application_information_value}>Jay Kerkar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.application_information_container}>
        <Text style={styles.application_information_title}>App Version: </Text>
        <Text style={styles.application_information_value}>
          {Application.nativeApplicationVersion}
        </Text>

        <Text style={styles.application_information_title}>
          {"  "}|{"  "}Build Version:{" "}
        </Text>
        <Text style={styles.application_information_value}>
          {Application.nativeBuildVersion}
        </Text>
      </View>
    </>
  );
};

export default Footer;
