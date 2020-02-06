import React from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  StyleProp,
  ViewStyle
} from 'react-native'
import styles from './styles'

interface ButtonProps {
  label: string
  onPress: () => void
  style?: StyleProp<ViewStyle>
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.buttonArea, props.style]}>
      <View style={styles.button}>
        <Text style={styles.buttonLabel}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default React.memo(
  Button,
  (prevProps, nextProps) => prevProps.label === nextProps.label
)
