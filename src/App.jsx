import "./App.scss";
import ErrorBoundary from "./ErrorBoundary";
import Home from "./home/Home";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
      {/* video */}
    </div>
  );
};

export default App;
