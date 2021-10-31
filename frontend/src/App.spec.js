import nock from 'nock'
import {render, waitFor} from "@testing-library/react";
import React from "react";
import {App} from "./App";
import {Provider} from "react-redux";
import {store} from "./redux";
import 'whatwg-fetch' // sets global.fetch
import '@testing-library/jest-dom' // extends Jest with .toHaveTextContent

describe('Llending Llama UI', () => {
  beforeEach(nock.cleanAll)

  it('works', async () => {
    nock(/./)
      .get(x => x.startsWith('/api/allocation'))
      .reply(200, {name: 'foo', rate: 7})

    const c = render(<Provider store={store}><App/></Provider>);
    await waitFor(() => c.getByText('foo', {exact:false}))
    expect(c.getByTestId('allocation-c020b901')).toHaveTextContent('7.00%') // .00 because of other test
  })

  it('works with 3 decimal places', async () => {
    nock(/./)
      .get(x => x.startsWith('/api/allocation'))
      .reply(200, {name: 'foo', rate: 7.168})

    const c = render(<Provider store={store}><App/></Provider>);
    await waitFor(() => c.getByText('foo', {exact:false}))
    expect(c.getByTestId('allocation-c020b901')).toHaveTextContent('7.17%')
  })
})
