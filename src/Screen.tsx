import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Button from "./Button";

function Screen() {
  return (
    <View style={styles.container}>
      <View style={styles.resultArea}>
        <Text style={styles.resultLabel}>0</Text>
      </View>
      <View style={styles.numberPadArea}>
        <View style={styles.numberPad}>
          <Button label={"7"} style={styles.buttonNumber}></Button>
          <Button label={"8"} style={styles.buttonNumber}></Button>
          <Button label={"9"} style={styles.buttonNumber}></Button>
          <Button label={"4"} style={styles.buttonNumber}></Button>
          <Button label={"5"} style={styles.buttonNumber}></Button>
          <Button label={"6"} style={styles.buttonNumber}></Button>
          <Button label={"1"} style={styles.buttonNumber}></Button>
          <Button label={"2"} style={styles.buttonNumber}></Button>
          <Button label={"3"} style={styles.buttonNumber}></Button>
          <Button label={"C"} style={styles.buttonNumber}></Button>
          <Button label={"0"} style={styles.buttonNumber}></Button>
          <Button label={"."} style={styles.buttonNumber}></Button>
        </View>
        <View style={styles.numberPadOperator}>
          <Button label="/"></Button>
          <Button label="*"></Button>
          <Button label="+"></Button>
          <Button label="-"></Button>
          <Button label="="></Button>
        </View>
      </View>
    </View>
  );
}

export default Screen;
