import React from 'react'
import renderer from 'react-test-renderer'
import jest from 'jest-mock'
import Button from '../Button'
import { TouchableOpacity } from 'react-native'

describe('<Button />', () => {
  it('it should rendered', () => {
    let component = renderer.create(<Button />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('it should render correct label', () => {
    let component = renderer.create(<Button label="+" />)
    expect(component.root.props.label).toEqual('+')
  })

  it('it should press correct function', () => {
    const myMock = jest.fn()
    let component = renderer.create(<Button onPress={myMock} label="+" />)
    let button = component.root.findByType(TouchableOpacity)
    button.props.onPress()
    expect(myMock).toHaveBeenCalled()
  })
})
