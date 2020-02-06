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
    paddingBottom: 5,
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row'
  },
  numberPad: {
    flex: 3,
    alignContent: 'stretch',
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
    flexBasis: '33.333%'
  },
  buttonLabel: {
    fontSize: 32
  },
  resultLabel: {
    fontSize: 80
  }
})

export default styles
