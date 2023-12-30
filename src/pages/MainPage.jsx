import React from "react";
import BackgroundWrapper from "../components/BackgroundWrapper.jsx";
import WelcomeContent from "../components/WelcomeContent.jsx";
import AboutUsContent from "../components/AboutUsContent.jsx";
import InterestingContent from "../components/InterestingContent.jsx";
import ReservationContent from "../components/ReservationContent.jsx";

const MainPage = ({showModal, setShowModal}) => {
    return (
        <div>
            <BackgroundWrapper>
                <WelcomeContent />
                <AboutUsContent />
                <InterestingContent />
                <ReservationContent showModal={showModal} setShowModal={setShowModal}/>
            </BackgroundWrapper>
        </div>
    );
}

export default MainPage;