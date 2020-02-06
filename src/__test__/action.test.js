import * as actions from '../store/action'
import {
  ADD_EXPRESSION,
  CALCULATE_EXPRESSION,
  RESET_EXPRESSION
} from '../constant'

describe('calculator actions', () => {
  it('addExpression should create ADD_EXPRESSION action', () => {
    expect(actions.addExpression('+')).toEqual({
      type: ADD_EXPRESSION,
      expression: '+'
    })
  })

  it('calculateExpression should create CALCULATE_EXPRESSION action', () => {
    expect(actions.calculateExpression()).toEqual({
      type: CALCULATE_EXPRESSION
    })
  })

  it('resetExpression should create RESET_EXPRESSION action', () => {
    expect(actions.resetExpression()).toEqual({
      type: RESET_EXPRESSION
    })
  })
})
