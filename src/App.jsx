import "./App.scss";
import ErrorBoundary from "./ErrorBoundary";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        {/* <Home /> */}
        <Watch />
      </ErrorBoundary>
      {/* video */}
    </div>
  );
};

export default App;
