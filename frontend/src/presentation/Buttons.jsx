import React from "react";
import {MinusSmIcon, PlusSmIcon} from '@heroicons/react/solid'

/*
 cp. https://tailwindui.com/components/application-ui/elements/buttons
 */

export const CircularPlusButton = (props) => (
  <button
    type="button"
    className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    {...props}
  >
    <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
  </button>
)

export const CircularMinusButton = (props) => (
  <button
    type="button"
    className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    {...props}
  >
    <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
  </button>
)
