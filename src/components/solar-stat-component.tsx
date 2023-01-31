// React
import React from "react";

// Internal
import { SolarStat } from "../types";
import SunriseIcon from "../icons/sunrise.svg";
import SunsetIcon from "../icons/sunset.svg";
import TimeService from "../services/time-service";

// CSS
import "./solar-stat-component.css";

interface SolarStatProps {
  statistic: SolarStat;
  time: string;
  timezone?: string;
}

// Displays the solar statistic for either sunrise and sunset, formatted
// to be displayed in the solar details component
function SolarStatComponent(props: SolarStatProps) {
  return (
    <div className="d-flex flex-row align-items-center">
      <div className="solar-icon flex-grow-0">
        {props.statistic === "sunrise" ? (
          <img src={SunriseIcon} alt="Sunrise" />
        ) : (
          <img src={SunsetIcon} alt="Sunset" />
        )}
      </div>
      <div className="solar-stat flex-grow-1">
        {TimeService.convertTimezone(props.time, props.timezone)}
      </div>
    </div>
  );
}

export default SolarStatComponent;
