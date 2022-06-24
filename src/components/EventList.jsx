import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Moment from 'moment';

export default function EventList(props) {
    return (
        <Link to={"/event/" + props.event._id} style={{textDecoration: 'none', color: 'black'}} event={this.props.event}>
            <div style={{
                marginLeft: '70px',
                marginRight: '70px',
                marginBottom: '50px',
                padding: '20px',
                backgroundColor: '#3d94f3',
                borderRadius: '10px'
            }}>
                <h1><b>{props.event.name}</b></h1>
                <p>
                    {props.event.description}
                </p>
                <Container fluid={true}>
                    <Row style={{
                        textAlign: 'center'
                    }}>
                        <Col md={12}>
                            <h3>{Moment(props.event.start_date).format('MMM Do YYYY')}</h3>
                            <p><i>Save the date</i></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Link>
    );
}