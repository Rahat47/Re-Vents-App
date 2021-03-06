import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { deleteEvent } from "../eventActions";
import { format } from "date-fns";

export default function EventListItem({ event }) {
    const dispatch = useDispatch();
    console.log(event.date);
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image
                            size="tiny"
                            circular
                            src={event.hostPhotoURL}
                        />
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description>
                                Hosted By {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock outline" />{" "}
                    {format(event.date, "MMMM d, yyyy h:mm a ")}
                    <Icon name="map marker alternate" /> {event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee => (
                        <EventListAttendee
                            key={attendee.id}
                            attendee={attendee}
                        />
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <Button
                    onClick={() => dispatch(deleteEvent(event.id))}
                    animated="fade"
                    floated="right"
                    color="red"
                >
                    <Button.Content visible>Delete</Button.Content>
                    <Button.Content hidden>
                        <Icon name="trash alternate" />
                    </Button.Content>
                </Button>
                <Button
                    as={Link}
                    to={`/events/${event.id}`}
                    animated
                    floated="right"
                    secondary
                >
                    <Button.Content visible>View</Button.Content>
                    <Button.Content hidden>
                        <Icon name="arrow right" />
                    </Button.Content>
                </Button>
            </Segment>
        </Segment.Group>
    );
}
