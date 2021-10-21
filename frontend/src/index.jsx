import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./App";

const app = <React.StrictMode><App/></React.StrictMode>;
ReactDOM.render(app, document.getElementById('root'));

// Hot Module Replacement (HMR)
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}
