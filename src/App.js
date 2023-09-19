import "./App.css";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Header from "./components/Header";

export default function App({ props }) {
  console.log(props);
  return (
    <Router>
      <Header />
      <Switch>
        {/* // Switch is going to find a route which is a url, if it finds it then it will render that component. */}
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
