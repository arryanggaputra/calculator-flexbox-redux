import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import Screen from '../Screen'
import { initialState } from '../constant'
import { Provider } from 'react-redux'

const mockStore = configureStore([])

describe('<Screen />', () => {
  let store
  let component

  beforeEach(() => {
    store = mockStore(initialState)

    component = renderer.create(
      <Provider store={store}>
        <Screen />
      </Provider>
    )
  })

  it('it should rendered', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
