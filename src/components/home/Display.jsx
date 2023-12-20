// React Native's Component Imports
import { Text, View, ScrollView } from "react-native";

// App's Internal Imports
import get_computed_style from "../../../assets/styles/home/display";

// App's External Imports
import { useTheme } from "@react-navigation/native";

const Display = ({
  result,
  operator,
  calculation,
  primary_operand,
  secondary_operand,
}) => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Text style={styles.display_calculations}>{calculation}</Text>
      </ScrollView>

      {result ? (
        <Text style={styles.display_digits}>= {result}</Text>
      ) : (
        <Text style={styles.display_digits}>
          {operator
            ? secondary_operand.length === 0
              ? "0"
              : secondary_operand
            : primary_operand.length === 0
            ? "0"
            : primary_operand}
        </Text>
      )}
    </View>
  );
};

export default Display;
