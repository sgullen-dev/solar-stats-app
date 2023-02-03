// Third Party
import nock from 'nock';
import { render, screen } from '@testing-library/react';

// Internal
import { BasePath, GeolocationEP, SolarDataEP } from 'apis/ep-config';
import { ipBaseKey } from 'apis/Geolocation/api-key';
import geolocationDataMock from 'apis/Geolocation/geolocation-data.mock';
import solarDataMock from 'apis/SolarData/solar-data.mock';
import SolarDetailsCard from './solar-details-card';
import { convertTimezone } from 'utils/time-utils';
import { nockDefaultReplyHeaders, TestWrapper } from 'utils/test-utils';

const mockIP = '1.1.1.1';
const renderComponent = () => {
  render(
    <TestWrapper>
      <SolarDetailsCard ipAddress={mockIP} />
    </TestWrapper>
  );
};

describe('SolarDetailsCard', () => {
  it('shows loading card followed by solar data card on successful request', async () => {
    // Set up the first request to get mocked geolocation data
    nock(BasePath.Geolocation)
      .defaultReplyHeaders(nockDefaultReplyHeaders)
      .get(GeolocationEP.Info)
      .query({ apikey: ipBaseKey, ip: mockIP })
      .reply(200, geolocationDataMock);

    // Set up the second request to get mocked solar data
    nock(BasePath.SolarData)
      .defaultReplyHeaders(nockDefaultReplyHeaders)
      .get(SolarDataEP.Json)
      .query({
        lat: geolocationDataMock.data.location.latitude,
        lng: geolocationDataMock.data.location.longitude,
        formatted: 0,
      })
      .reply(200, solarDataMock);

    renderComponent();

    // Calculate the times that should be shown using mocked data
    const mockedSunriseTime: string = convertTimezone(
      solarDataMock.results.sunrise,
      'UTC'
    );
    const mockedSunsetTime: string = convertTimezone(
      solarDataMock.results.sunset,
      'UTC'
    );

    // The component should show a loading card while requests are being made
    await screen.findByText('Loading...');

    // After loading is complete, it shows the location information returned from
    // geolocation data and the solar information returned from solar data apis
    await screen.findByText('Mock City, Mock Country');
    expect(screen.getAllByText(mockedSunriseTime).length).toBeGreaterThan(0);
    expect(screen.getAllByText(mockedSunsetTime).length).toBeGreaterThan(0);
  });

  it('shows error alert on failed request', async () => {
    // Set up the first request to get geolocation data to fail with code 429
    nock(BasePath.Geolocation)
      .defaultReplyHeaders(nockDefaultReplyHeaders)
      .get(GeolocationEP.Info)
      .query({ apikey: ipBaseKey, ip: mockIP })
      .reply(429);

    renderComponent();

    // The component should show a loading card while requests are being made
    await screen.findByText('Loading...');

    // After loading is complete and the result is an error, it shows an alert
    // with generic error message
    await screen.findByRole('alert');
    expect(screen.getByText('An error has occurred.')).toBeInTheDocument();
  });
});
