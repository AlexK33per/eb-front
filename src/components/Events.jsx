import EventList from "./EventList";
import {Component} from "react";
import axios from 'axios';

export default class Events extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:3001/events/sf', {
                params : {
                    session_type : 18
                }
            })
            .then((response) => {
                var that = this;
                that.setState({ events: response.data })
            })
    }
        


    render() {
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
                <h1>Event list</h1>
                {
                    this.state.events.map((event) => {
                        return <EventList key={event._id} event={event} />
                    })
                }
            </div>
        );
    }
}