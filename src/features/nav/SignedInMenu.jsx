import { React } from "react";
import { Link } from "react-router-dom";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Image,
    Menu,
} from "semantic-ui-react";

export default function SignedInMenu({ signOut }) {
    return (
        <Menu.Item position="right">
            <Image avatar spaced="right" src="/assets/user.png" />
            <Dropdown pointing="top left" text="Bob">
                <DropdownMenu>
                    <DropdownItem
                        as={Link}
                        to="/createEvent"
                        text="Create Event"
                        icon="plus"
                    />
                    <DropdownItem text="My Profile" icon="user" />
                    <DropdownItem
                        onClick={signOut}
                        text="Sign Out"
                        icon="power"
                    />
                </DropdownMenu>
            </Dropdown>
        </Menu.Item>
    );
}
