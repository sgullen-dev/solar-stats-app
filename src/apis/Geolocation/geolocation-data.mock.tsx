import GeolocationData from './geolocation-data.type';

const geolocationDataMock: GeolocationData = {
  data: {
    location: {
      city: {
        name: 'Mock City',
      },
      country: {
        name: 'Mock Country',
      },
      latitude: 10,
      longitude: 10,
    },
    timezone: {
      id: 'UTC',
    },
  },
};

export default geolocationDataMock;
