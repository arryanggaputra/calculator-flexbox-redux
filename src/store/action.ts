import {
  ADD_EXPRESSION,
  CALCULATE_EXPRESSION,
  RESET_EXPRESSION,
  keypadOperators
} from '../constant'

export const addExpression = expression => ({
  type: ADD_EXPRESSION,
  expression
})

export const calculateExpression = () => ({
  type: CALCULATE_EXPRESSION
})

export const resetExpression = () => ({
  type: RESET_EXPRESSION
})

export const setExpression = (
  actionExpression,
  defaultExpression,
  isDoneCalculate
) => {
  let isInputOperator = keypadOperators.includes(actionExpression)
  let isLastExpressionAnOperator = keypadOperators.includes(
    defaultExpression[defaultExpression.length - 1]
  )
  let expression = defaultExpression
  if (!isInputOperator || !isLastExpressionAnOperator) {
    expression = [
      ...(isDoneCalculate ? [] : defaultExpression),
      actionExpression
    ]
  }

  if (isInputOperator && isLastExpressionAnOperator) {
    defaultExpression[defaultExpression.length - 1] = actionExpression
  }

  let visibleNumber = isInputOperator
    ? [defaultExpression]
    : expression.join('').split(/[*+/-]/)

  return {
    expression,
    visibleNumber: visibleNumber.pop()
  }
}
