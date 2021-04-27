import "./__MainCotainer.scss";
import AsideContainer from "../AsideContainer/AsideContainer";
import { lazy, Suspense } from "react";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
const SimplySquare =  lazy(() => import('../OnePilotBattle/SimplySquare/SimplySquare'));

const renderLoading = () => <p>Loading...</p>

const MainContainer = ({onMenuClick, isMenuIconClicked}) => {
    return(
        <>
            <AsideContainer clickMenuIcon={onMenuClick} isExpanded={isMenuIconClicked} />
            <section className={`main-container ${isMenuIconClicked ? 'srink-container' : ""}`}>
                <ErrorBoundary>
                    <Suspense fallback={renderLoading()}>
                        <SimplySquare />
                    </Suspense>
                </ErrorBoundary>
            </section>
        </>
    )
}

export default MainContainer;