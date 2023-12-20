// React's Hook Imports
import { useState, useEffect } from "react";

// React Native's Component Imports
import { View, FlatList } from "react-native";

// App's Internal Imports
import { License } from "../../../components";
const licenses = require("../../../../licenses.json");
import get_computed_style from "../../../../assets/styles/legal/licenses";

// App's External Imports
import { useTheme } from "@react-navigation/native";

const Licenses = () => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);

  const package_name = Object.keys(licenses);
  const package_details = Object.values(licenses);
  const [package_information, set_package_information] = useState([]);

  const fetch_package_information = () => {
    const merged_package = [];

    for (let index = 0; index < package_name.length; index++) {
      const merged_package_information = {
        name: package_name[index],
        publisher: package_details[index].publisher,
        license_type: package_details[index].licenses,
        repository: package_details[index].repository,
        license_url:
          package_details[index].licenseFile &&
          package_details[index].licenseFile.slice(-3) === ".md"
            ? `${package_details[index].repository}/blob/main/LICENSE.md`
            : `${package_details[index].repository}/blob/main/LICENSE`,
      };

      if (merged_package_information) {
        merged_package.push(merged_package_information);
      }
    }

    if (merged_package) {
      set_package_information(merged_package);
    }
  };

  useEffect(() => {
    fetch_package_information();

    return () => {
      set_package_information([]);
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={package_information}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <License item={item} />;
        }}
      />
    </View>
  );
};

export default Licenses;
