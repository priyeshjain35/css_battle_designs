import "./__MainCotainer.scss";
import AsideContainer from "../AsideContainer/AsideContainer";
import { lazy, Suspense } from "react";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
const Routes =  lazy(() => import('../../Router/Routes'));

const renderLoading = () => <p>Loading...</p>

const MainContainer = ({onMenuClick, isMenuIconClicked}) => {
    return(
        <>
            <AsideContainer clickMenuIcon={onMenuClick} isExpanded={isMenuIconClicked} />
            <section className={`main-container ${isMenuIconClicked ? 'srink-container' : ""}`}>
                <ErrorBoundary>
                    <Suspense fallback={renderLoading()}>
                        <Routes />
                    </Suspense>
                </ErrorBoundary>
            </section>
        </>
    )
}

export default MainContainer;