import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Button from "./Button";
import { keypadNumber, keypadOperators } from "./constant";

function Screen() {
  return (
    <View style={styles.container}>
      <View style={styles.resultArea}>
        <Text style={styles.resultLabel}>0</Text>
      </View>
      <View style={styles.numberPadArea}>
        <View style={styles.numberPadArea}>
          <View style={styles.numberPad}>
            {keypadNumber.map(item => (
              <Button
                label={item}
                key={item}
                style={styles.buttonNumber}
              ></Button>
            ))}
          </View>
          <View style={styles.numberPadOperator}>
            {keypadOperators.map(item => (
              <Button label={item} key={item}></Button>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

export default Screen;
