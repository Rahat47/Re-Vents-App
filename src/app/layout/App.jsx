import React from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import Navbar from "../../features/nav/NavBar";

function App() {
    return (
        <>
            <Navbar />
            <Container className="main">
                <EventDashboard />
            </Container>
        </>
    );
}

export default App;
