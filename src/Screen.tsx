import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Button from './Button'
import styles from './styles'
import { keypadNumber, keypadOperators } from './constant'
import {
  addExpression,
  calculateExpression,
  resetExpression
} from './store/action'

function Screen(props: any) {
  const onPress = label => {
    switch (label) {
      case '=':
        props.dispatch(calculateExpression())
        break

      case 'C':
        props.dispatch(resetExpression())
        break

      default:
        props.dispatch(addExpression(label))
        break
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.resultArea}>
        <Text style={styles.resultLabel}>{props.visibleNumber}</Text>
      </View>
      <View style={styles.numberPadArea}>
        <View style={styles.numberPad}>
          {keypadNumber.map(item => (
            <Button
              onPress={() => onPress(item)}
              label={item}
              key={item}
              style={styles.buttonNumber}
            />
          ))}
        </View>
        <View style={styles.numberPadOperator}>
          {keypadOperators.map(item => (
            <Button onPress={() => onPress(item)} label={item} key={item} />
          ))}
        </View>
      </View>
    </View>
  )
}

function mapStateToProps(state) {
  return {
    expression: state.expression,
    visibleNumber: state.visibleNumber
  }
}
export default connect(mapStateToProps)(Screen)
