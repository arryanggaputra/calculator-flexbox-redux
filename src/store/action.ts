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

export const generateExpression = (allExpression, actionExpression) => {
  let expression = allExpression
  let inputExpression = actionExpression
  let isNextActionAnOperator = keypadOperators.includes(inputExpression)
  let isPrevExpressionAnOperator = keypadOperators.includes(
    expression[expression.length - 1]
  )

  if (!isPrevExpressionAnOperator && !isNextActionAnOperator) {
    expression = [
      ...(expression.length == 1 && expression[expression.length - 1] == '0'
        ? []
        : expression),
      inputExpression
    ]
  } else if (isPrevExpressionAnOperator && isNextActionAnOperator) {
    // Replace the last math operator with new math operator
    expression[expression.length - 1] = inputExpression
  } else {
    expression = [...expression, inputExpression]
  }

  let getVisibleNumber = expression.join('').split(/[*+/-]/)
  let visibleNumber = isNextActionAnOperator
    ? [getVisibleNumber[getVisibleNumber.length - 2]]
    : getVisibleNumber

  return {
    expression,
    visibleNumber: visibleNumber.pop()
  }
}
