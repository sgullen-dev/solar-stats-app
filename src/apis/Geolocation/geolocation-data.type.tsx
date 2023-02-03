export default interface GeolocationData {
  data: {
    location: {
      city: {
        name: string;
      };
      country: {
        name: string;
      };
      latitude: number;
      longitude: number;
    };
    timezone: {
      id: string;
    };
  };
}
