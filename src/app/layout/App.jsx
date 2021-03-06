import React from "react";
import { Route, useLocation } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import Navbar from "../../features/nav/NavBar";
import Sanbox from "../../features/sandbox/Sanbox";
import ModalManager from "../common/modals/ModalManager";

function App() {
    const { key } = useLocation();
    return (
        <>
            <ModalManager />
            <Route exact path="/" component={HomePage} />
            <Route
                path={"/(.+)"}
                render={() => (
                    <>
                        <Navbar />
                        <Container className="main">
                            <Route
                                exact
                                path="/events"
                                component={EventDashboard}
                            />
                            <Route exact path="/sandbox" component={Sanbox} />
                            <Route
                                path="/events/:id"
                                component={EventDetailedPage}
                            />
                            <Route
                                path={["/createEvent", "/manage/:id"]}
                                component={EventForm}
                                key={key}
                            />
                        </Container>
                    </>
                )}
            />
        </>
    );
}

export default App;
