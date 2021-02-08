import './App.css';
import Navbar from "./components/Navbar.jsx";
import Home from "./components/pages/Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>      
    </>
  );
}

export default App;
