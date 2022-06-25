import {Col, Container, Row} from "react-bootstrap";

export default function Ticket(props) {
    return (
            <div style={{
                marginLeft: '70px',
                marginRight: '70px',
                marginBottom: '50px',
                padding: '20px',
                backgroundColor: 'yellow',
                borderRadius: '10px'
            }}>
                <h1><b>{props.ticket.name}</b></h1>
                <p>
                    {props.ticket.description}
                </p>
                <Container fluid={true}>
                    <Row style={{
                        textAlign: 'center'
                    }}>
                        <Col md={12}>
                            <h3>{props.ticket.prize}€</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
    );
}