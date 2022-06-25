import {Component, useState} from "react";
import {Col, Row} from "react-bootstrap";
import bgImage from "./Header/san_francisco_adobe.jpeg";
import axios from "axios";
import Moment from "moment";
import Ticket from "./Ticket";
import * as ticket from "react-bootstrap/ElementChildren";

export default class EventDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event: null
        };
    }

    componentDidMount() {
        console.log(this.props);
        const url = 'http://127.0.0.1:3001/events/' + this.props.id;
        axios
            .get(url, {})
            .then((response) => {
                console.log(response.data);
                this.setState({ event: response.data })
            })
    }

    render() {
        const start_date = this.state.event != null ? this.state.event.start_date : "";
        const end_date = this.state.event != null ? this.state.event.end_date : "";
        const ticketList = this.state.event != null ? this.state.event.tickets : [];
         return (
             <div style={{ textAlign: 'center' }}>
                 <Row style={{
                     textAlign: "center",
                     backgroundImage: `url(${bgImage})`,
                     backgroundPosition: "50% 60%",
                     padding: "70px"
                 }}>
                     <h1 style={{
                         color: "white",
                         marginTop: "0px",
                         fontSize: "100px",
                         fontWeight: 'bold'
                     }}>
                         {
                             this.state.event != null ? this.state.event.name : ""
                         }
                     </h1>
                 </Row>
                 <h1 style={{
                     color: "#ee523d",
                     marginBottom: "5px",
                     fontWeight: 'bold'
                 }}>
                     Description
                 </h1>
                 <h3 style={{
                     marginTop: "0px"
                 }}>
                     {
                         this.state.event != null ? this.state.event.description : ""
                     }
                 </h3>
                 <Row>
                     <Col md={3}></Col>
                     <Col md={3}>
                         <h3 style={{
                             fontWeight: 'bold'
                         }}>Start Date</h3>
                     </Col>
                     <Col md={3}>
                         <h3 style={{
                             fontWeight: 'bold'
                         }}>End Date</h3>
                     </Col>
                     <Col md={3}></Col>
                 </Row>
                 <Row>
                     <Col md={3}></Col>
                     <Col md={3}>
                         <h3>{Moment(start_date).format('MMM Do YYYY')}</h3>
                     </Col>
                     <Col md={3}>
                         <h3>{Moment(end_date).format('MMM Do YYYY')}</h3>
                     </Col>
                     <Col md={3}></Col>
                 </Row>
                 {
                     ticketList.map((ticket) => {
                         return <Ticket key={ticket.name} ticket={ticket}/>
                     })
                 }
             </div>
         )
     }
}