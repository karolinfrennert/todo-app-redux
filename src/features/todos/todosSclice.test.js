import { hasExpectedRequestMetadata } from '@reduxjs/toolkit/dist/matchers'
import todosReducer from './todosSlice'

test('', () => {
  const initialState = [
    { id: 0, text: 'See If this is deleted' },
    { id: 1, text: 'See If this is deleted' },
  ]

  const action = { type: 'todos/todoDeleted', payload: 0 }
  const result = todosReducer(initialState, action)
  expect(result.length).toBe(1)
})
