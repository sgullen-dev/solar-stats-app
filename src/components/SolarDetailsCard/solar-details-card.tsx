// React
import React from 'react';

// Bootstrap
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// Internal
import { useGetGeolocation } from 'apis/Geolocation/use-get-geolocation';
import { useGetSolarData } from 'apis/SolarData/use-get-solar-data';
import { GridCard, SolarDetails } from 'components';

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

  // Check whether geolocation data exists
  const locationData = geolocation?.data;

  // This is locked into isLoading state until locationData is truthy
  // Pass the longitude and latitude into the solar details request to get sunrise and sunset
  const {
    data: solarData,
    error: solarError,
    isLoading: isSolarLoading,
  } = useGetSolarData(
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
      title={`${locationData!.location.city.name}, ${
        locationData!.location.country.name
      }`}
      subtitle={props.ipAddress}
    >
      <Tabs className="mt-3">
        <Tab eventKey="location" title="Location">
          <SolarDetails
            solarData={solarData!}
            timezone={locationData!.timezone.id}
          />
        </Tab>
        <Tab eventKey="local" title="Local">
          <SolarDetails solarData={solarData!} />
        </Tab>
        <Tab eventKey="utc" title="UTC">
          <SolarDetails solarData={solarData!} timezone="UTC" />
        </Tab>
      </Tabs>
    </GridCard>
  );
}

export default SolarDetailsCard;
