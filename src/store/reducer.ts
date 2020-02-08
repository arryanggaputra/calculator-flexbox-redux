import {
  initialState,
  ADD_EXPRESSION,
  CALCULATE_EXPRESSION,
  RESET_EXPRESSION,
  keypadOperators
} from '../constant'
import { generateExpression } from './action'

const reducer = (state = initialState, action) => {
  let _state = { ...state }

  switch (action.type) {
    case ADD_EXPRESSION:
      const { expression, visibleNumber } = generateExpression(
        _state.expression,
        action.expression
      )

      _state = Object.assign(_state, {
        expression,
        visibleNumber
      })
      break

    case RESET_EXPRESSION:
      _state = initialState
      break

    case CALCULATE_EXPRESSION:
      let _expression = _state.expression
      let lastExpression = _expression[_expression.length - 1]

      if (keypadOperators.includes(lastExpression)) {
        _expression.pop()
      }

      let calculation = eval(_expression.join(''))
      console.log(calculation)
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
