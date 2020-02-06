import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleProp,
  ViewStyle
} from "react-native";
import styles from "./styles";

interface ButtonProps {
  label: string;
  style?: StyleProp<ViewStyle>;
}

function Button(props: ButtonProps) {
  console.log("Button rendered", props.label);
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={[styles.buttonArea, props.style]}
    >
      <View style={styles.button}>
        <Text style={styles.buttonLabel}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;
