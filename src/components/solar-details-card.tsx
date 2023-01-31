// React
import React from "react";

// Bootstrap
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// Internal
import { useGetGeolocation } from "../apis/use-get-geolocation";
import { useGetSolarDetails } from "../apis/use-get-solar-details";
import GridCard from "./grid-card";
import SolarStatsComponent from "./solar-stats-component";

interface SolarDetailsProps {
  ipAddress: string;
}

// Card component used to get and display the solar details of a location based on its IP address
function SolarDetailsCard(props: SolarDetailsProps) {
  // Get the geolocation data from the provided ip address
  const {
    data: geolocation,
    error: geoError,
    isLoading: isGeoLoading,
  } = useGetGeolocation(props.ipAddress);

  // Check whether geolocation data has come in to prevent dependent call
  const locationData = geolocation?.data;

  // Pass the longitude and latitude into the solar details request to get sunrise and sunset,
  // when there is no locationData yet this request will not be made, so we can safely ignore
  // the type check for locationData potentially being undefined
  const {
    data: solarDetails,
    error: solarError,
    isLoading: isSolarLoading,
  } = useGetSolarDetails(
    props.ipAddress,
    locationData?.location?.longitude,
    locationData?.location?.latitude,
    !!locationData
  );

  // If either the geolocation or solar details requests fail, display an error message
  if (geoError || solarError)
    return <Alert variant="danger">An error has occurred.</Alert>;

  // Card to display while loading the necessary data
  if (isGeoLoading || isSolarLoading)
    return (
      <GridCard title="Loading...">
        <div className="d-flex flex-row align-items-center justify-content-center h-100">
          <Spinner animation="border" variant="secondary" />
        </div>
      </GridCard>
    );

  return (
    <GridCard
      title={`${locationData!.location.city.name}, ${locationData!.location.country.name}`}
      subtitle={props.ipAddress}
    >
      <Tabs className="mt-3">
        <Tab eventKey="location" title="Location">
          <SolarStatsComponent
            solarDetails={solarDetails!}
            timezone={locationData!.timezone.id}
          />
        </Tab>
        <Tab eventKey="local" title="Local">
          <SolarStatsComponent solarDetails={solarDetails!} />
        </Tab>
        <Tab eventKey="utc" title="UTC">
          <SolarStatsComponent solarDetails={solarDetails!} timezone={"UTC"} />
        </Tab>
      </Tabs>
    </GridCard>
  );
}

export default SolarDetailsCard;
