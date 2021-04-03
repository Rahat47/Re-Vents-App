import cuid from "cuid";
import { Formik, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Header, Segment } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import * as Yup from "yup";
import TextInput from "../../../app/common/form/TextInput";
import CustomTextArea from "../../../app/common/form/CustomTextArea";
import CustomSelect from "../../../app/common/form/CustomSelect";
import { categoryData } from "../../../app/api/categoryOptions";
import CustomDate from "../../../app/common/form/CustomDate";

export default function EventForm({ match, history }) {
    const dispatch = useDispatch();

    const selectedEvent = useSelector(state =>
        state.event.events.find(e => e.id === match.params.id)
    );

    const initialValues = selectedEvent ?? {
        title: "",
        category: "",
        description: "",
        city: "",
        venue: "",
        date: "",
    };

    const validationSchema = Yup.object({
        title: Yup.string().required("You must provide a title!"),
        category: Yup.string().required("You must provide a category!"),
        description: Yup.string().required(),
        city: Yup.string().required(),
        venue: Yup.string().required(),
        date: Yup.string().required(),
    });

    return (
        <Segment clearing>
            <Formik
                initialValues={initialValues}
                onSubmit={values => {
                    selectedEvent
                        ? dispatch(updateEvent({ ...selectedEvent, ...values }))
                        : dispatch(
                              createEvent({
                                  ...values,
                                  id: cuid(),
                                  hostedBy: "User",
                                  attendees: [],
                                  hostPhotoURL: "/assets/user.png",
                              })
                          );
                    history.push("/events");
                }}
                validationSchema={validationSchema}
            >
                <Form autoComplete="off" className="ui form">
                    <Header sub color="teal" content="Event Details" />
                    <TextInput name="title" placeholder="Event Title" />
                    <CustomSelect
                        options={categoryData}
                        name="category"
                        placeholder="Event Category"
                    />
                    <CustomTextArea
                        rows={3}
                        name="description"
                        placeholder="Event Description"
                    />
                    <Header sub color="teal" content="Event Location Details" />
                    <TextInput name="city" placeholder="Event City" />
                    <TextInput name="venue" placeholder="Event Venue" />
                    <CustomDate
                        name="date"
                        placeholderText="Event Date"
                        timeFormat="HH:mm"
                        showTimeSelect
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm a"
                    />

                    <Button type="submit" positive floated="right">
                        Submit
                    </Button>
                    <Button
                        negative
                        type="submit"
                        floated="right"
                        as={Link}
                        to={"/events"}
                    >
                        Cancel
                    </Button>
                </Form>
            </Formik>
        </Segment>
    );
}
