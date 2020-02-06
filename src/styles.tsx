import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  resultArea: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 20
  },
  numberPadArea: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row'
  },
  numberPad: {
    flex: 3,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  numberPadOperator: {
    flex: 1
  },
  buttonArea: {
    flexGrow: 1,
    padding: 5
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dddddd',
    borderRadius: 10
  },
  buttonNumber: {
    flexBasis: 'calc(100% / 3)'
  },
  buttonLabel: {
    fontSize: 32
  },
  resultLabel: {
    fontSize: 80
  }
})

export default styles
