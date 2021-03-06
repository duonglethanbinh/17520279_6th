import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import waiting from './img/icons/waiting.png'
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && <img id="loader" src={waiting} alt="waiting" width="24px"></img>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoadingIndicator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
