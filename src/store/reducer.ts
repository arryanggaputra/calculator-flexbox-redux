import {
  keypadOperators,
  initialState,
  ADD_EXPRESSION,
  CALCULATE_EXPRESSION,
  RESET_EXPRESSION
} from '../constant'

const reducer = (state = initialState, action) => {
  let _state = { ...state }

  switch (action.type) {
    case ADD_EXPRESSION:
      let isInputOperator = keypadOperators.includes(action.expression)
      let isLastExpressionAnOperator = keypadOperators.includes(
        _state.expression[_state.expression.length - 1]
      )
      let expression = _state.expression
      if (!isInputOperator || !isLastExpressionAnOperator) {
        expression = [
          ...(_state.isDoneCalculate ? [] : _state.expression),
          action.expression
        ]
      }
      let visibleNumber = expression.join('').split(/[*+/-]/)

      console.log('expression', expression.length)

      _state = Object.assign(_state, {
        expression,
        isDoneCalculate: false,
        visibleNumber: isInputOperator
          ? _state.visibleNumber
          : visibleNumber[visibleNumber.length - 1]
      })
      break

    case RESET_EXPRESSION:
      _state = initialState
      break

    case CALCULATE_EXPRESSION:
      let calculation = eval(_state.expression.join(''))
      _state = Object.assign(_state, {
        expression: [calculation],
        isDoneCalculate: true,
        visibleNumber: Math.round(calculation * 100000) / 100000
      })
      break

    default:
      break
  }

  return _state
}

export default reducer
