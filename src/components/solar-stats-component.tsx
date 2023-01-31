// React
import React from "react";

// Bootstrap
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// Internal
import { SolarData } from "../apis/types";
import { SolarStat } from "../types";
import SolarStatComponent from "./solar-stat-component";

interface SolarStatsProps {
  solarDetails: SolarData;
  timezone?: string;
}

// Displays the solar statistics for sunrise and sunset, formatted
// to be displayed in the solar details card
function SolarStatsComponent(props: SolarStatsProps) {
  return (
    <Row className="mt-3" xs={2}>
      <Col>
        <SolarStatComponent
          statistic={SolarStat.sunrise}
          time={props.solarDetails.results.sunrise}
          timezone={props.timezone}
        />
      </Col>
      <Col>
        <SolarStatComponent
          statistic={SolarStat.sunset}
          time={props.solarDetails.results.sunset}
          timezone={props.timezone}
        />
      </Col>
    </Row>
  );
}

export default SolarStatsComponent;
