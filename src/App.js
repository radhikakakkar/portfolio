import "./App.css";
import {
  BrowserRouter as Router,
  renderMatches,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Complete from "./component/Complete";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Complete/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
