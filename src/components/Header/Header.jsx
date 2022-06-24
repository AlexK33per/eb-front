import logo from "./logo-wordmark-orange-cut.png";
import bgImage from './san_francisco_adobe.jpeg'
import { Row } from "react-bootstrap"

export default function Header() {
    return(
        <div style={{ textAlign: 'center' }}>
            <Row style={{
                textAlign: "center",
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: "50% 60%",
                padding: "70px"
            }}>
                <img src={logo} alt='EventBrite logo' height='100px' style={{
                    objectFit: 'none',
                    aspectRatio: '100%',
                    height: '150px'
                }}/>
                <h1 style={{
                    color: "white",
                    marginTop: "0px",
                    fontSize: "50px",
                    fontWeight: 'bold'
                }}>
                    San Francisco, USA
                </h1>
            </Row>
            <h2 style={{
                marginBottom: "0px",
                fontWeight: 'bold'
            }}>
                Here you can see the events that awaits you in
            </h2>
            <h1 style={{
                color: "#ee523d",
                marginTop: "0px",
                fontWeight: 'bold'
            }}>
                San Francisco, USA
            </h1>
        </div>
    )
}