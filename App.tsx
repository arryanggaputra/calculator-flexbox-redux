import React from 'react'
import Screen from './src/Screen'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/store/reducer'

const store = createStore(reducer)

export default function App() {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  )
}
