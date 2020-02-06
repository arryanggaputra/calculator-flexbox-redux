import reducer from '../store/reducer'
import {
  initialState,
  ADD_EXPRESSION,
  CALCULATE_EXPRESSION,
  RESET_EXPRESSION
} from '../constant'

describe('calculator reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })

  it('should handle ADD_EXPRESSION, CALCULATE_EXPRESSION', () => {
    let expectation = {
      ...initialState,
      ...{ expression: ['1'], visibleNumber: '1' }
    }

    expect(
      reducer(initialState, {
        type: ADD_EXPRESSION,
        expression: '1'
      })
    ).toEqual(expectation)

    expect(
      reducer(
        {
          expression: ['1', '+', '2'],
          visibleNumber: '2',
          isDoneCalculate: false,
          isInputOperator: false
        },
        {
          type: CALCULATE_EXPRESSION
        }
      )
    ).toEqual({
      ...initialState,
      ...{ expression: [3], visibleNumber: 3, isDoneCalculate: true }
    })

    expect(
      reducer(
        {
          expression: ['1', '+', '2'],
          visibleNumber: '2',
          isDoneCalculate: false,
          isInputOperator: false
        },
        {
          type: RESET_EXPRESSION
        }
      )
    ).toEqual(initialState)
  })
})
