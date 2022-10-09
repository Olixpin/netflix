import "./App.scss";
import ErrorBoundary from "./ErrorBoundary";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        {/* <Home /> */}
        {/* <Watch /> */}
        <Register />
      </ErrorBoundary>
      {/* video */}
    </div>
  );
};

export default App;
