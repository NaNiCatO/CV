// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome'; // create Welcome.js component
import Personal from './components/Personal'; // create Personal.js component
import Education from './components/Education'; // create Education.js component
import Project from './components/Project'; // create Project.js component

const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/personal">Personal</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/" exact component={Welcome} />
        <Route path="/personal" component={Personal} />
        <Route path="/education" component={Education} />
        <Route path="/project" component={Project} />
      </div>
    </Router>
  );
};

export default AppRouter;