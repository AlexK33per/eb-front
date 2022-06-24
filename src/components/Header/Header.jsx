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
                padding: "20px",
            }}>
                <img src={logo} alt='EventBrite logo' height='100px'/>
                <h1 style={{
                    color: "white",
                    marginTop: "0px",
                    fontSize: "35px"
                }}>
                    San Francisco, USA
                </h1>
            </Row>
            <h2 style={{
                marginBottom: "0px",
            }}>
                Here you can see the events that awaits you im
            </h2>
            <h1 style={{
                color: "#ee523d",
                marginTop: "0px",
            }}>
                San Francisco, USA
            </h1>
        </div>
    )
}