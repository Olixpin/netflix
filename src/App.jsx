import "./App.scss";
import ErrorBoundary from "./ErrorBoundary";
import Home from "./home/Home";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </div>
  );
};

export default App;
