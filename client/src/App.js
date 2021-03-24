import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path = '/1' component={Home} />

        </Switch>
      </Router>
    </>
  )
}

export default App;
