// React Native's Component Imports
import { View, Text, Linking, TouchableOpacity } from "react-native";

// App's Internal Imports
import get_computed_style from "../../../assets/styles/legal/licenses";

// App's External Imports
import { useTheme } from "@react-navigation/native";

const License = ({ item }) => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);

  return (
    <View style={styles.license}>
      <Text style={styles.license_title}>{item.name}</Text>

      {item.license_type && (
        <Text style={styles.license_content}>Type: {item.license_type}</Text>
      )}

      {item.publisher && (
        <Text style={styles.license_content}>Publisher: {item.publisher}</Text>
      )}

      {item.repository && (
        <Text style={styles.license_content}>
          Repository:{" "}
          <TouchableOpacity
            onPress={async () => {
              await Linking.openURL(item.repository);
            }}
          >
            <Text style={styles.external_url}>
              {item.repository.length <= 37
                ? item.repository
                : `${item.repository.slice(0, 34)}...`}
            </Text>
          </TouchableOpacity>
        </Text>
      )}

      {item.repository && (
        <Text style={styles.license_content}>
          License:{"   "}
          <TouchableOpacity
            onPress={async () => {
              await Linking.openURL(item.license_url);
            }}
          >
            <Text style={styles.external_url}>
              {item.license_url.length <= 37
                ? item.license_url
                : `${item.license_url.slice(0, 34)}...`}
            </Text>
          </TouchableOpacity>
        </Text>
      )}
    </View>
  );
};

export default License;
