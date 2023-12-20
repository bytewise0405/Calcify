// React's Hook Imports
import { useState } from "react";

// App's Internal Imports
import { Display, Keyboard } from "../../../components";

const Home = () => {
  const [result, set_result] = useState();
  const [operator, set_operator] = useState();
  const [calculation, set_calculation] = useState("");
  const [primary_operand, set_primary_operand] = useState("");
  const [secondary_operand, set_secondary_operand] = useState("");

  const clear_calculation = () => {
    set_result();
    set_operator();
    set_calculation("");
    set_primary_operand("");
    set_secondary_operand("");
  };

  const delete_digit = () => {
    if (operator) {
      set_secondary_operand(secondary_operand.slice(0, -1));
    } else {
      set_primary_operand(primary_operand.slice(0, -1));
    }
  };

  const handle_number_key = (key_value) => {
    set_result();

    if (operator) {
      if (secondary_operand.length < 10) {
        set_secondary_operand(secondary_operand + key_value);
      }
    } else {
      if (primary_operand.length < 10) {
        set_primary_operand(primary_operand + key_value);
      }
    }
  };

  const handle_function_key = (key_value) => {
    if (primary_operand.length !== 0 && secondary_operand.length === 0) {
      set_operator(key_value);
      set_calculation(`${calculation} ${primary_operand} ${key_value}`);
    }

    if (primary_operand.length !== 0 && secondary_operand.length !== 0) {
      calculate_result("implicit");
      set_operator(key_value);
      set_calculation(`${calculation} ${secondary_operand} ${key_value}`);
    }
  };

  const calculate_result = (type) => {
    if (
      operator &&
      primary_operand.length !== 0 &&
      secondary_operand.length !== 0
    ) {
      let calculated_result;

      switch (operator) {
        case "+":
          calculated_result =
            Number(primary_operand) + Number(secondary_operand);
          break;
        case "-":
          calculated_result =
            Number(primary_operand) - Number(secondary_operand);
          break;
        case "*":
          calculated_result =
            Number(primary_operand) * Number(secondary_operand);
          break;
        case "/":
          calculated_result =
            Number(primary_operand) / Number(secondary_operand);
          break;
        case "%":
          calculated_result =
            Number(primary_operand) % Number(secondary_operand);
          break;
        default:
          calculated_result = 0;
      }

      if (type === "implicit") {
        set_primary_operand(String(calculated_result));
        set_secondary_operand("");
        set_operator();
      } else {
        clear_calculation();
        set_result(calculated_result);
      }
    }
  };

  return (
    <>
      <Display
        result={result}
        operator={operator}
        calculation={calculation}
        primary_operand={primary_operand}
        secondary_operand={secondary_operand}
      />

      <Keyboard
        delete_digit={delete_digit}
        calculate_result={calculate_result}
        handle_number_key={handle_number_key}
        clear_calculation={clear_calculation}
        handle_function_key={handle_function_key}
      />
    </>
  );
};

export default Home;
