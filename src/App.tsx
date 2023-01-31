// React
import React, { useState } from "react";

// Bootstrap
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// Internal
import IpAddressCard from "./components/ip-address-card";
import SolarDetailsCard from "./components/solar-details-card";

function App() {
  const [ipAddressList, setIpAddressList] = useState<string[]>([]);

  return (
    <Container>
      <Row xs={1} md={2} className="mt-5">
        {ipAddressList.map((location: string, index: number) => (
          <Col className="mb-4" key={`location-${index}`}>
            <SolarDetailsCard ipAddress={location} />
          </Col>
        ))}
        <Col className="mb-4">
          <IpAddressCard
            onSubmit={(ipAddress: string) => {
              setIpAddressList([...ipAddressList, ipAddress]);
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
