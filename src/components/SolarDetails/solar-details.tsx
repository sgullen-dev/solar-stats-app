// React
import React from 'react';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Internal
import SolarData from 'apis/SolarData/solar-data.type';
import { SolarStatisticType } from 'types';
import { SolarStatistic } from 'components';

interface SolarDetailsProps {
  solarData: SolarData;
  timezone?: string;
}

// Displays the solar statistics for sunrise and sunset, formatted
// to be displayed in the solar details card
function SolarDetails(props: SolarDetailsProps) {
  return (
    <Row className="mt-3" xs={2}>
      <Col>
        <SolarStatistic
          statistic={SolarStatisticType.Sunrise}
          time={props.solarData.results.sunrise}
          timezone={props.timezone}
        />
      </Col>
      <Col>
        <SolarStatistic
          statistic={SolarStatisticType.Sunset}
          time={props.solarData.results.sunset}
          timezone={props.timezone}
        />
      </Col>
    </Row>
  );
}

export default SolarDetails;
