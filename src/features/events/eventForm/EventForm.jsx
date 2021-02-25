import cuid from "cuid";
import React, { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function EventForm({
    setFormOpen,
    setEvent,
    createEvent,
    selectedEvent,
    updateEvent,
}) {
    const initialValues = selectedEvent ?? {
        title: "",
        category: "",
        description: "",
        city: "",
        venue: "",
        date: "",
    };

    const [values, setValues] = useState(initialValues);

    function handleFormSumbit() {
        selectedEvent
            ? updateEvent({ ...selectedEvent, ...values })
            : createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: "User",
                  attendees: [],
                  hostPhotoURL: "/assets/user.png",
              });
        setFormOpen(false);
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    return (
        <Segment clearing>
            <Header
                content={
                    selectedEvent ? "Update The Event" : "Create New Event"
                }
            />
            <Form onSubmit={handleFormSumbit}>
                <Form.Field>
                    <input
                        type="text"
                        placeholder="Event Title"
                        name="title"
                        value={values.title}
                        onChange={e => handleInputChange(e)}
                    />
                </Form.Field>

                <Form.Field>
                    <input
                        type="text"
                        placeholder="Category"
                        name="category"
                        value={values.category}
                        onChange={e => handleInputChange(e)}
                    />
                </Form.Field>

                <Form.Field>
                    <input
                        type="text"
                        placeholder="Description"
                        name="description"
                        value={values.description}
                        onChange={e => handleInputChange(e)}
                    />
                </Form.Field>

                <Form.Field>
                    <input
                        type="text"
                        placeholder="City"
                        name="city"
                        value={values.city}
                        onChange={e => handleInputChange(e)}
                    />
                </Form.Field>

                <Form.Field>
                    <input
                        type="text"
                        placeholder="Venue"
                        name="venue"
                        value={values.venue}
                        onChange={e => handleInputChange(e)}
                    />
                </Form.Field>

                <Form.Field>
                    <input
                        type="date"
                        placeholder="Date"
                        name="date"
                        value={values.date}
                        onChange={e => handleInputChange(e)}
                    />
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
