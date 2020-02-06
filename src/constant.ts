/*
 * action types
 */
export const ADD_EXPRESSION = 'ADD_EXPRESSION'
export const CALCULATE_EXPRESSION = 'CALCULATE_EXPRESSION'
export const RESET_EXPRESSION = 'RESET_EXPRESSION'

/**
 * redux initial state
 */
export const initialState = {
  expression: [],
  visibleNumber: '0',
  isDoneCalculate: false,
  isInputOperator: false
}

export const keypadNumber = [
  '7',
  '8',
  '9',
  '4',
  '5',
  '6',
  '1',
  '2',
  '3',
  'C',
  '0',
  '.'
]

export const keypadOperators = ['/', '*', '+', '-', '=']
