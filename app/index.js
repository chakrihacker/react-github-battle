const React = require('react');
const ReactDOM = require('react-dom');
const routes = require('./config/routes');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const browserHistory = ReactRouter.browserHistory;

ReactDOM.render(
  // <Router history={browserHistory} routes={routes} />,
  routes,
  document.getElementById('app')
);
