import React from "react";
import {XCircleIcon} from '@heroicons/react/solid'
import {useSelector} from "react-redux";
import * as r from 'ramda'

// https://tailwindui.com/components/application-ui/feedback/alerts

const ErrorAlertPresentation = ({msg}) => (
  <div className="rounded-md bg-red-50 p-4">
    <div className="flex">
      <div className="flex-shrink-0">
        <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true"/>
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-red-800">Something went wrong</h3>
        <div className="mt-2 text-sm text-red-700">
          <p>{msg}</p>
        </div>
      </div>
    </div>
  </div>
);

export const ErrorAlert = () => {
  const errors = useSelector(x => x.errors)
  if (r.isEmpty(errors)) { return null }
  return <ErrorAlertPresentation msg={r.head(errors)}/>;
};
