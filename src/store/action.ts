import {
  ADD_EXPRESSION,
  CALCULATE_EXPRESSION,
  RESET_EXPRESSION
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
