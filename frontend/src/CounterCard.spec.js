import {fireEvent, render} from "@testing-library/react";
import {CounterCard} from "./CounterCard";
import '@testing-library/jest-dom'
import React from "react";

describe('CounterCard: counter', () => {
  const getValueEl = c => c.getByTestId('counter-1be3bf29');
  const getPlusButton = c => c.getByTestId('plus-203c3849');

  it('is initially 0', async () => {
    const c = render(<CounterCard/>);
    expect(getValueEl(c)).toHaveTextContent(0)
  })

  it('can be incremented', () => {
    const c = render(<CounterCard/>);
    fireEvent.click(getPlusButton(c));
    expect(getValueEl(c)).toHaveTextContent(1)
  })
})
