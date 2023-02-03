// React
import React from 'react';

// Internal
import { convertTimezone } from 'utils/time-utils';
import { SolarStatisticType } from 'types';
import SunriseIcon from 'icons/sunrise.svg';
import SunsetIcon from 'icons/sunset.svg';

// CSS
import './solar-statistic.css';

interface SolarStatProps {
  statistic: SolarStatisticType;
  time: string;
  timezone?: string;
}

// Displays the solar statistic for either sunrise and sunset, formatted
// to be displayed in the solar details component
function SolarStatistic(props: SolarStatProps) {
  return (
    <div className="d-flex flex-row align-items-center">
      <div className="solar-icon flex-grow-0">
        {props.statistic === SolarStatisticType.Sunrise ? (
          <img src={SunriseIcon} alt="Sunrise" />
        ) : (
          <img src={SunsetIcon} alt="Sunset" />
        )}
      </div>
      <div className="solar-stat flex-grow-1">
        {convertTimezone(props.time, props.timezone)}
      </div>
    </div>
  );
}

export default SolarStatistic;
