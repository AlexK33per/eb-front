import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function EventRow(props) {
    return (
        <Link to={"/event/" + props.event._id} style={{textDecoration: 'none', color: 'black'}}>
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
                <Container>
                    <Row>
                        <Col md={6}>
                            <h3>{props.event.start_date}</h3>
                            <p><i>Save the date</i></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Link>
    );
}