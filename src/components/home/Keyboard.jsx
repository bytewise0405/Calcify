// React's Hook Imports
import { useMemo } from "react";

// React Native's Component Imports
import { Text, View, TouchableOpacity } from "react-native";

// App's Constant Imports
import { screen_width } from "../../constants";

// App's Internal Imports
import get_computed_style from "../../../assets/styles/home/keyboard";

// App's External Imports
import BottomSheet from "@gorhom/bottom-sheet";
import { useTheme } from "@react-navigation/native";
import { Feather } from "react-native-vector-icons";

const Keyboard = ({
  delete_digit,
  calculate_result,
  handle_number_key,
  clear_calculation,
  handle_function_key,
}) => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);
  const snap_points = useMemo(() => ["75%"], []);

  return (
    <BottomSheet
      snapPoints={snap_points}
      overDragResistanceFactor={0}
      backgroundStyle={styles.container}
      handleIndicatorStyle={styles.handle_indicator}
    >
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.function_key}
          onPress={() => {
            clear_calculation();
          }}
        >
          <Text style={styles.key_content}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.function_key,
            { backgroundColor: colors.delete_key_color },
          ]}
          onPress={() => {
            delete_digit();
          }}
        >
          <Text style={styles.key_content}>
            <Feather name="delete" style={styles.key_icon} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.function_key}
          onPress={() => {
            handle_function_key("%");
          }}
        >
          <Text style={styles.key_content}>%</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.function_key}
          onPress={() => {
            handle_function_key("/");
          }}
        >
          <Text style={styles.key_content}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.number_key}
          onPress={() => {
            handle_number_key("7");
          }}
        >
          <Text style={styles.key_content}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.number_key}
          onPress={() => {
            handle_number_key("8");
          }}
        >
          <Text style={styles.key_content}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.number_key}
          onPress={() => {
            handle_number_key("9");
          }}
        >
          <Text style={styles.key_content}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.function_key}
          onPress={() => {
            handle_function_key("*");
          }}
        >
          <Text style={styles.key_content}>X</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.number_key}
          onPress={() => {
            handle_number_key("4");
          }}
        >
          <Text style={styles.key_content}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.number_key}
          onPress={() => {
            handle_number_key("5");
          }}
        >
          <Text style={styles.key_content}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.number_key}
          onPress={() => {
            handle_number_key("6");
          }}
        >
          <Text style={styles.key_content}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.function_key}
          onPress={() => {
            handle_function_key("-");
          }}
        >
          <Text style={styles.key_content}>—</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.number_key}
          onPress={() => {
            handle_number_key("1");
          }}
        >
          <Text style={styles.key_content}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.number_key}
          onPress={() => {
            handle_number_key("2");
          }}
        >
          <Text style={styles.key_content}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.number_key}
          onPress={() => {
            handle_number_key("3");
          }}
        >
          <Text style={styles.key_content}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.function_key}
          onPress={() => {
            handle_function_key("+");
          }}
        >
          <Text style={styles.key_content}>＋</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[
            styles.number_key,
            {
              width: 0.45 * screen_width,
            },
          ]}
          onPress={() => {
            handle_number_key("0");
          }}
        >
          <Text style={styles.key_content}>0</Text>
        </TouchableOpacity>

        <>
          <TouchableOpacity
            style={styles.number_key}
            onPress={() => {
              handle_number_key(".");
            }}
          >
            <Text style={styles.key_content}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.function_key,
              { backgroundColor: colors.equality_key_color },
            ]}
            onPress={() => {
              calculate_result("explicit");
            }}
          >
            <Text style={styles.key_content}>＝</Text>
          </TouchableOpacity>
        </>
      </View>
    </BottomSheet>
  );
};

export default Keyboard;
