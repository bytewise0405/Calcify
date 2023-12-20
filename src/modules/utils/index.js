// App's External Imports
import * as Application from "expo-application";
import remoteConfig from "@react-native-firebase/remote-config";

// fetch_remote_config() ----> The said function will be used to fetch remote configurations from Firebase
const fetch_remote_config = (
  set_is_visible,
  set_critical_update_download_url
) => {
  remoteConfig()
    .setDefaults({
      critical_update_version: "",
      critical_update_download_url: "",
    })
    .then(() => remoteConfig().fetchAndActivate())
    .then(() => {
      const critical_update_version = remoteConfig().getValue(
        "critical_update_version"
      );
      const critical_update_download_url = remoteConfig().getValue(
        "critical_update_download_url"
      );

      if (
        critical_update_version.getSource() === "remote" &&
        critical_update_download_url.getSource() === "remote"
      ) {
        if (
          Application.nativeApplicationVersion != critical_update_version._value
        ) {
          set_is_visible(true);
          set_critical_update_download_url(critical_update_download_url._value);
        }
      }
    });
};

export { fetch_remote_config };
