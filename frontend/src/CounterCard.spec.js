import {render} from "@testing-library/react";
import {CounterCard} from "./CounterCard";
import '@testing-library/jest-dom'
import React from "react";

describe('CounterCard', () => {
  it('is initially 0', async () => {
    const {getByTestId} = render(<CounterCard/>);
    expect(getByTestId('counter-1be3bf29')).toHaveTextContent(0)
  })
})
