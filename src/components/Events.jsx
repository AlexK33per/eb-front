import EventList from "./EventList";
import {Component} from "react";
import axios from 'axios';
import {Button, ButtonGroup} from "react-bootstrap";

export default class Events extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
            filter: null
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:3001/events/sf', {})
            .then((response) => {
                this.setState({ events: response.data })
            })
    }
        
    toggleFilter(filter) {
        this.setState({
            filter: filter
        });
    }

    render() {
        let events = this.state.filter == null ? this.state.events : this.state.events.filter((event) => {
            switch (this.state.filter) {
                case "online": return event.isOnline;
                case "physical": return !event.isOnline;
                default: return false;
            }
        });

        return (
            <div style={{
                textAlign: 'center',
                backgroundColor: 'white',
                marginTop: '-50px',
                marginLeft: '100px',
                marginRight: '100px',
                borderRadius: 5,
                padding: '20px'
            }}>
                <h1 style={{
                    padding: '20px'
                }}>Event list</h1>
                <ButtonGroup aria-label="Filters" style={{
                    padding: '5px'
                }}>
                    <Button variant="primary" onClick={() => this.toggleFilter(null)}>All</Button>
                    <Button variant="primary" onClick={() => this.toggleFilter("online")}>Online</Button>
                    <Button variant="primary" onClick={() => this.toggleFilter("physical")}>Physical</Button>
                </ButtonGroup>
                {
                    events.map((event) => {
                        return <EventList key={event._id} event={event} />
                    })
                }
            </div>
        );
    }
}