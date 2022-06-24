import {Component, useState} from "react";
import {Row} from "react-bootstrap";
import bgImage from "./Header/san_francisco_adobe.jpeg";
import logo from "./Header/logo-wordmark-orange-cut.png";
import axios from "axios";

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
                     marginTop: "0px",
                     fontWeight: 'bold',
                 }}>
                     {
                         this.state.event != null ? this.state.event.description : ""
                     }
                 </h3>
             </div>
         )
     }
}