import { lazy, Suspense } from "react";
import './__App.scss';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
const SimplySquare =  lazy(() => import('../OnePilotBattle/SimplySquare/SimplySquare'));

const renderLoading = () => <p>Loading...</p>

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={renderLoading()}>
          <SimplySquare />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
