import {errorsReducer} from "./redux-errors";

describe('Errors reducer', () => {
  const state = ['foo']
  it('removes error', () => {
    state.push('bar')
    expect(errorsReducer(state, {type: 'errors/dismissed-first'}))
      .toEqual(['bar'])
  })
  it('saves payloads', () => {
    expect(errorsReducer(state, {type: 'errors/added', payload: 'baz'}))
      .toEqual(['foo', 'bar', 'baz'])
  })
})
