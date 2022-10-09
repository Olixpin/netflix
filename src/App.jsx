import "./App.scss";
import ErrorBoundary from "./ErrorBoundary";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Home />
        <Watch />
        <Register />
        <Login />
      </ErrorBoundary>
      {/* video */}
    </div>
  );
};

export default App;
