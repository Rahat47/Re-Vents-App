import React from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function EventForm({ setFormOpen }) {
    return (
        <Segment clearing>
            <Header content="Create New Event" />
            <Form>
                <Form.Field>
                    <input type="text" placeholder="Event Title" />
                </Form.Field>

                <Form.Field>
                    <input type="text" placeholder="Category" />
                </Form.Field>

                <Form.Field>
                    <input type="text" placeholder="Description" />
                </Form.Field>

                <Form.Field>
                    <input type="text" placeholder="City" />
                </Form.Field>

                <Form.Field>
                    <input type="text" placeholder="Venue" />
                </Form.Field>

                <Form.Field>
                    <input type="date" placeholder="Date" />
                </Form.Field>
                <Button animated type="submit" positive floated="right">
                    <Button.Content visible>Submit</Button.Content>
                    <Button.Content hidden>Submit</Button.Content>
                </Button>
                <Button
                    animated="vertical"
                    negative
                    type="submit"
                    floated="right"
                    onClick={() => setFormOpen(false)}
                >
                    <Button.Content visible>Cancel</Button.Content>
                    <Button.Content hidden>Cancel</Button.Content>
                </Button>
            </Form>
        </Segment>
    );
}
