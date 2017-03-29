import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App.jsx';
import About from './components/AboutContent.jsx';
import Projects from './components/ProjectContent.jsx';
import Skills from './components/SkillsContent.jsx';
import Contact from './components/ContactContent.jsx';
import { styles } from './styles/global.css'; // eslint-disable-line no-unused-vars
import { currentLocationState } from './actions/Actions.jsx';

browserHistory.listen(location => store.dispatch(currentLocationState(location.pathname)));

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" router={Router} component={App}>
        <Route path="about" component={About} />
        <Route path="projects" component={Projects} />
        <Route path="skills" component={Skills} />
        <Route path="contact" component={Contact} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
