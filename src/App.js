import "./App.css";
import { Router } from "@reach/router";
import Question1 from "./pages/Question1";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";
import Question4 from "./pages/Question4";

function App() {
  return (
    <Router>
      <Question1 path="/q1" />
      <Question2 path="/q2" />
      <Question3 path="/q3" />
      <Question4 path="/q4" />
    </Router>
  );
}

export default App;
