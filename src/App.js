import './App.css';
import {Router} from '@reach/router'
import Question1 from './pages/Question1';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Question1 path="/q1"/>

    </Router>
  );
}

export default App;
