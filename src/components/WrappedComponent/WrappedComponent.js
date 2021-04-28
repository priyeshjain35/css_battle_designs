import { lazy, Suspense } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const LazyComponents = {};

const SimplySquare = lazy(() => import("../PilotBattle/SimplySquare/SimplySquare"));

LazyComponents.SimplySquare = SimplySquare;

const renderLoading = () => <p>Loading...</p>

const WrappedComponent = ({history, location, match}) => {
    const {component} = match.params;
    const LoadableComponent = LazyComponents[component];
    return (
        <ErrorBoundary>
            <Suspense fallback={renderLoading()}>
                <LoadableComponent />
            </Suspense>
        </ErrorBoundary>
    )
}

export default WrappedComponent;